import React, { useState } from "react";
import axios from "axios";

export default function AddEventModal({ show, handleClose }) {
  const API = process.env.REACT_APP_API_URL;

  const addNewEvent = (event) => {
    axios
      .post(`${API}/events`, event)
      .then((res) => console.log("success"))
      .catch((err) => console.log(err));
  };

  const [event, setEvent] = useState({
    title: "",
    short_desc: "",
    thumbnail: "",
    img: "",
    long_desc: "",
    date: "",
    location: "",
  });

  const handleChange = (event) => {
    setEvent({ ...event, [event.target.id]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewEvent(event);
    handleClose();
  };

  return (
    <div>
      {show ? (
        <>
          <div className="justify-center items-top flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blueGray-700 outline-none focus:outline-none">
                <div class="p-6 text-gray-50">
                  <form
                    novalidate=""
                    action=""
                    class="container mx-auto flex flex-col space-y-12"
                    onSubmit={handleSubmit}
                  >
                    <fieldset class="grid grid-cols-4 gap-6 rounded-md p-6 shadow-sm bg-gray-900">
                      <div class="col-span-full space-y-2 lg:col-span-1">
                        <p class="font-medium lg:text-2xl">Event Information</p>
                        <p class="text-xs md:text-sm lg:text-base">
                          Lets create an exciting, unique and exclusive event
                          for our members!
                        </p>
                      </div>
                      <div class="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
                        <div class="col-span-full">
                          <label for="title" class="text-sm">
                            Event Title
                          </label>
                          <input
                            id="title"
                            type="text"
                            placeholder="Title"
                            onChange={handleChange}
                            class="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-700 text-gray-900"
                          />
                        </div>
                        <div class="col-span-full">
                          <label for="short_desc" class="text-sm">
                            Short Description
                          </label>
                          <input
                            id="short_desc"
                            type="text"
                            placeholder="short and sweet event description"
                            onChange={handleChange}
                            class="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-700 text-gray-900"
                          />
                        </div>
                        <div class="col-span-full sm:col-span-3">
                          <label for="thumbnail" class="text-sm">
                            Event Thumbnail Image URL
                          </label>
                          <input
                            id="thumbnail"
                            type="text"
                            placeholder="https://"
                            onChange={handleChange}
                            class="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-700 text-gray-900"
                          />
                        </div>
                        <div class="col-span-full sm:col-span-3">
                          <label for="img" class="text-sm">
                            Event Banner Image URL
                          </label>
                          <input
                            id="img"
                            type="text"
                            placeholder="https://"
                            onChange={handleChange}
                            class="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-700 text-gray-900"
                          />
                        </div>
                        <div class="col-span-full">
                          <label for="location" class="text-sm">
                            Event Location
                          </label>
                          <input
                            id="location"
                            type="text"
                            placeholder="What city is your event in?"
                            onChange={handleChange}
                            class="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-700 text-gray-900"
                          />
                        </div>
                        <div class="col-span-full">
                          <label for="date" class="text-sm">
                            Event Date
                          </label>
                          <input
                            id="date"
                            type="date"
                            placeholder=""
                            onChange={handleChange}
                            class="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-700 text-gray-900"
                          />
                        </div>
                        <div class="col-span-full">
                          <label for="long_desc" class="text-sm">
                            Long Description
                          </label>
                          <textarea
                            id="long_desc"
                            placeholder="Give us all the juicy event details here!"
                            rows="4"
                            onChange={handleChange}
                            class="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-700 text-gray-900"
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="submit"
                          class="rounded-md border px-4 py-2 border-gray-100"
                        >
                          Submit
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleClose()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
