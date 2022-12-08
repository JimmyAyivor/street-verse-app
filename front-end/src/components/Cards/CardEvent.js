import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modals/EventModal.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function CardMessages({ Event, openModal }) {

  const { id, title, img, short_desc, date, location } = Event;
  const navigate = useNavigate()
  const refreshPage = () => {
    navigate(0);
  };
  const handleDelete = () => {
    axios
      .delete(`${API}/events/${id}`)
      .then((response) => navigate(`/admin/events`));
    refreshPage().catch((error) => console.projects(error));
  };

  return (
    <>
      <tr>
        <Link to={`/event/${id}`}>
          <th className="border-t-1  px-1 align-middle border-l-1 border-r-1 text-xs whitespace-nowrap p-2 text-left flex items-center list-decimal">
            <img
              src={img}
              alt="..."
              className="w-12 h-16 rounded border-1/2 border-blueGray-5 shadow mr-1/2"
            ></img>
          </th></Link>
        <td className="border-t-0 font-semibold px-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {title}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {new Date(date).toDateString()}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {location}
        </td>

        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="overflow-hidden truncate w-60">
            {short_desc}
          </div>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
          <Modal openModal={openModal} id={id} event={Event} title={title} date={date} handleDelete={handleDelete} />
        </td>
      </tr>
    </>
  );
}

CardMessages.defaultProps = {
  color: "light",
};

CardMessages.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
