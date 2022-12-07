import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CardCommunity from "./CardCommunity"

const API = process.env.REACT_APP_API_URL;



export default function CardCommunities() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/users`)
            .then((res) => setUsers(res.data.payload))
            .catch((err) => console.log(err));
    }, [])





    return (
        <div className = "flex flex-wrap justify-center text-center mb-24" >
            {users.map((user) => (
                <CardCommunity key={user.id} user={user} />

            ))}

        </div>
    )
}