import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useTitle } from '../../hooks/useTitle';
import CardCommunity from "./CardCommunity"

const API = process.env.REACT_APP_API_URL;



export default function CardCommunities() {
    const [users, setUsers] = useState([]);
   const title = useTitle("Our Community | StretVerse ")
    
    useEffect(() => {
        axios
            .get(`${API}/users`)
            .then((res) => setUsers(res.data.payload))
            .catch((err) => console.log(err));
    }, [])





    return (
        <div className = "flex flex-wrap justify-center text-center mt-16" >
            {users.map((user) => (
                <CardCommunity key={user.id} user={user} />

            ))}

        </div>
    )
}
