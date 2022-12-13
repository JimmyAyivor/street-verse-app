import React, { useEffect, useState } from "react";

// components

import UserNavbar from "../components/Navbars/UserNavbar.js";
import UserSidebar from "../components/Sidebar/UserSidebar";
import FooterAdmin from "../components/Footers/FooterAdmin.js";
import UserHeader from "../components/Headers/UserHeader.js";
import { useLocation } from "react-router-dom";


export default function User({ children }) {
  const [title, setTitle] = useState('')
  const [subHeading, setSubHeading] = useState('')
  const router = useLocation()

  useEffect(() => {
    if (router.pathname === "/user/community") {
      setTitle("Your Community")
      setSubHeading("Celebrate authenticity and diversity of street-wear culture!")
    } else if (router.pathname === "/user/events") {
      setTitle("Your Events");
      setSubHeading("Here are some upcoming and past events");
    } else if (router.pathname === "/user/messages") {
      setTitle("Your Messages");
      setSubHeading("Messages from the Community");
    } else {
      setTitle("");
      setSubHeading("");
    }
  }, [router])


  return (
    <>
      <UserSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <UserNavbar />
        <UserHeader title={title} subHeading={subHeading} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
