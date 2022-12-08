import React from "react";
import CardSettings from "../../components/Cards/CardSettings.js";
import CardProfile from "../../components/Cards/CardProfile.js";
import axios from "axios";
import { useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Settings() {
  // const { id } = useParams();
  let id = 1
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
    occupation: "",
    img: "",
    bio: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/users/${id}`)
      .then((res) => setUser(res.data.payload))
      .catch((err) => console.log(err));
  }, [id]);

  const updateUser = (updatedUser) => {
    axios
      .put(`${API}/users/${id}`, updatedUser)
      .then(() => {
        navigate("/admin/settings");
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleZipChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value.replace(/[^\d{5}]$/, "").substr(0, 5),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user);
  
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings
            user={user}
            setUser={setUser}
            updateUser={updateUser}
            handleSubmit={handleSubmit}
            handleTextChange={handleTextChange}
            handleZipChange={handleZipChange}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile user={user} />
        </div>
      </div>
    </>
  );
}
