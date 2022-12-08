import React from "react";
import { useTitle } from "../../hooks/useTitle.js";
import { useEffect, useState } from "react";
import axios from "axios";
import CardEvent from "./CardEvent.js";
import AddEventModal from "../Modals/AddEventModal.js";

const API = process.env.REACT_APP_API_URL;

export default function CardEvents({ color, title }) {
  const [events, setEvents] = useState([]);
  const [showAddEventModal, setAddEventModal] = useState(false);

  useTitle("Member Events | StretVerse ");

  useEffect(() => {
    axios
      .get(`${API}/events`)
      .then((response) => {
        setEvents(response.data.payload);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                {title}{" "}
              </h3>
            </div>
            <div className="py-3 px-3 sm:mt-0">
              <button
                className="bg-gray-500 active:bg-gray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setAddEventModal(true)}
              >
                Add Event
              </button>
              <AddEventModal
                show={showAddEventModal}
                handleClose={() => setAddEventModal(false)}
              />
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
                    #
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Title
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
                    Location
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Description
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
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
                {events[0] ? (
                  events.map((event) => {
                    return (
                      <CardEvent key={event.id} id={event.id} Event={event} />
                    );
                  })
                ) : (
                  <tr>
                    <td
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? " text-blueGray-500 border-blueGray-100"
                          : " text-blueGray-200 border-blueGray-500")
                      }
                    >
                      No Event Found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </ol>
        </div>
      </div>
    </>
  );
}
