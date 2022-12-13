import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import CardMessage from "./CardMessage.js"
import { useTitle } from "../../hooks/useTitle.js";
// components
const API = process.env.REACT_APP_API_URL;

export default function CardMessages({ color, title }) {
 
  useTitle("Member Messages | StretVerse ")
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/messages`)
      .then((response) => {
        setMessages(response.data.payload);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [messages]);




//Todo  Post Update Delete

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <ol>
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Sender's Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Message
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {messages[0]? messages.map((message) => {
                return <CardMessage key={message.id} id={message.id} Message={message} />;
              }):<tr>
              <td align="center" colSpan="6"><p className={
                "px-6  text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  " +
                (color === "light"
                  ? " text-blueGray-500 border-blueGray-100"
                  : " text-blueGray-200 border-blueGray-500")
              }>No Message Found!</p></td>
            </tr>}
            </tbody>
          </table>
          </ol>
        </div>
      </div>
    </>
  );
}

CardMessages.defaultProps = {
  color: "light",
};

CardMessages.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
