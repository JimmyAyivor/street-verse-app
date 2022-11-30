import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Landing() {
  return (
    <>
      <main>
        <div
          className="relative flex items-center justify-center h-screen mb-20
         overflow-hidden"
        >

          <div className="container text-center mx-auto flex flex-col items-center justify-center space-y-8 md:p-10 md:px-24 xl:px-48 relative z-30 p-5 text-white  rounded-xl">
            <div className="relative">
              <h1 className="font-bold leading-none text-center text-white text-[42px] sm:text-6xl md:text-7xl lg:text-[85px] justfy-center object-center">
                StreetVerse
              </h1>
              <p className="mt-4 md:text-2xl pt-2 pb-8 leading-5 font-medium text-center">
                The world’s premier global NFT streetwear club. We are a
                community built by fashion lovers, founded to celebrate the

                authenticity and diversity of streetwear culture.
              </p>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source src="/img/streetv.mp4" type="video/mp4" />
            Your browser does not support the video tag.

            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>

          </video>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"></div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap pt-9">
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <FontAwesomeIcon icon="fa fa-users" />
                    </div>

                    <h6 className="text-xl font-semibold">Community</h6>

                    <p className="mt-2 mb-4 text-blueGray-500">
                      Become an insider everywhere. Join our invaluable
                      community of top street wear creators, producers,
                      enthusiasts and collectors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <FontAwesomeIcon icon="fa fa-calendar" />
                    </div>
                    <h6 className="text-xl font-semibold">Experiences</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      A one-time fee will give you lifetime access to
                      unparalleled streetwear experiences around the world. Your
                      StreetVerse membership NFT is a tradable asset.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <FontAwesomeIcon icon="fa-solid fa-fingerprint" />
                    </div>
                    <h6 className="text-xl font-semibold">Access</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Purchase one of kind NFT merch drops directly from your
                      favorite streetwear brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block h-95-px -top-94-px"
              ></svg>

              <p className="text-md font-light mt-2 text-white"></p>
            </blockquote>
          </div>
        </section>

        <section className="pb-10 relative block bg-Gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-Gray">Events</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-Gray-900">
                  Get a sneak peek at our exciting members-only events, taking
                  place all over the world! Participate in the discussions on
                  our private Discord channels to request or suggest new events.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap place-content-evenly gap-4">
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                  src="img/runway3.jpeg"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl  tracking-wide">London</h2>
                    <h2 className="text-3xl font-semibold tracking-wide">
                      London Fashion{" "}
                    </h2>
                    <p className="dark:text-gray-100">
                      London Fashion Week Streetwear September 2023.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                  src="img/freedom-tower1.jpeg"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl  tracking-wide">New York</h2>
                    <h2 className="text-3xl font-semibold tracking-wide">
                      New York{" "}
                    </h2>
                    <p className="dark:text-gray-100">
                      New York Fashion Week Streetwear September 2023.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                  src="img/parisfashion.jpeg"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl  tracking-wide">Paris</h2>
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Paris Fashion{" "}
                    </h2>
                    <p className="dark:text-gray-100">
                      Paris Fashion Week Streetwear September 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-8 md:pb-48">

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center  justify-center ">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-Gray">
                  Our Community
                </h2>
                <p className="text-lg leading-relaxed m-4 mb-4 text-blueGray-500">
                  A Community Built By StreetWear Fashion Lovers
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/community1.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Virgil Abloh</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-twitter" />
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-facebook-f" />
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-dribbble" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-2-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Stylist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-google" />
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-facebook-f" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-3-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      NFT Expert
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-google" />
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-twitter" />
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-instagram" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-4-470x470.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-dribbble" />
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-google" />
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-twitter" />
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon="fab fa-instagram" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 pt-6 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Your Membership is a Lifetime Asset
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  The world’s premier global NFT streetwear club. We are a
                  community built by fashion lovers, founded to celebrate the
                  authenticity and diversity of streetwear culture.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon="fas fa-users" />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Community
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Become an insider everywhere. Join our invaluable community of
                  top street wear creators, producers, enthusiasts and
                  collectors.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon="fas fa-calendar" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Experiences
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  A one-time fee will give you lifetime access to unparalleled
                  streetwear experiences around the world. Your StreetVerse
                  membership NFT is a tradable asset.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon="fas fa-fingerprint" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Access
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Purchase one of kind NFT merch drops directly from your
                  favorite streetwear brands.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
