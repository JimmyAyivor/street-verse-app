import React from "react";

// components

import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import UserNavbar from "../../components/Navbars/UserNavbar.js";

// layout for page

export default function UserDashboard() {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          
        </div>
        <div className="w-full xl:w-4/12 px-4">
          
        </div>
      </div>
    </>
  );
}
