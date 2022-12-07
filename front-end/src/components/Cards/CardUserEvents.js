import React, { useState, useEffect } from "react";
import axios from "axios";
import CardUserEvent from "./CardUserEvent";

const API = process.env.REACT_APP_API_URL;

export default function CardUserEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/events`)
      .then((res) => setEvents(res.data.payload))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mt-36 px-5 my-10 sm:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {events.map((event, id) => {
          return <CardUserEvent key={id} event={event} />;
        })}
      </div>
    </>
  );
}
