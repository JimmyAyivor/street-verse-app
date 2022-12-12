import React, { useEffect, useState } from "react";
import CardStats from "../Cards/CardStats";

import axios from "axios";
const API = process.env.REACT_APP_API_URL

export default function HeaderStats() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [messages, setMessages] = useState([]);
  const totalUsers = users && users.length * 10;
  const totalEvents = events && events.length * 10;
  const totalMessages = messages && messages.length * 10;

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((response) => {
        setUsers(response.data.payload);

      })
      .catch((error) => {

        console.error(error);
      });
  }, [users]);

  useEffect(() => {

    axios
      .get(`${API}/events`)
      .then((response) => {
        setEvents(response.data.payload);

      })
      .catch((error) => {

        console.error(error);
      });
  }, [events]);

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




  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="USERS"
                  statTitle={totalUsers.toString()}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EVENTS"
                  statTitle={totalEvents.toString()}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-calendar-check"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MESSAGES"
                  statTitle={totalMessages.toString()}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-comments"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MEMBERSHIPS"
                  statTitle="65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-user-plus"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
