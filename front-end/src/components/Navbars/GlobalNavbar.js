import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between p-2 bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <img
                alt="..."
                src="/img/StreetVerselogo.png"
                className="border-none mx-auto max-w-180-px h-16"
              />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon="fas fa-bars" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 font-['Play'] text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  to="/events"
                >
                  Events
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 font-['Play'] text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  to="/community"
                >
                  Community
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 font-['Play'] text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  to="/membership"
                >
                  Membership
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 font-['Play'] text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  to="faq"
                >
                  Faq
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 font-['Play'] text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  to="/about"
                >
                  About
                </Link>{" "}


              </li>

              <li className="flex items-center">
                
                {  <Link
                  className="hover:text-blueGray-500 font-['Play'] text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  to="auth/login"
                >
                  Sign in
                </Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
