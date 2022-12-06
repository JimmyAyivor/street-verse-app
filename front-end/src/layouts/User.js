import React from "react";

// components

import UserNavbar from "../components/Navbars/UserNavbar.js";
import UserSidebar from "../components/Sidebar/UserSidebar";
import FooterAdmin from "../components/Footers/FooterAdmin.js";
import UserHeader from "../components/Headers/UserHeader.js";


export default function User({ children }) {
  return (
    <>
      <UserSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <UserNavbar />
        <UserHeader />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
