import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <>
      <main>
        <div
          className="relative flex items-center justify-center h-screen mb-20
         overflow-hidden"
        >
          <div className=" container text-center mx-auto flex flex-col items-center justify-center space-y-8 md:p-10 md:px-24 xl:px-48 z-30 p-5 bg-gray-900 bg-opacity-50 rounded-xl">
            <h1 className="font-bold leading-none text-center font-['Play'] text-yellow-500 text-[42px] sm:text-6xl md:text-7xl lg:text-[100px] justfy-center object-center">
              StreetVerse
            </h1>
            <p className="mt-4 md:text-2xl pt-2 pb-8 leading-5 font-['Play'] text-yellow-200 font-medium text-center">
              The world’s premier global NFT streetwear club. We are a
              community built by fashion lovers, founded to celebrate the
              authenticity and diversity of streetwear culture.
            </p>

          </div>
            <video
              autoPlay
              loop
              muted
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
              <source src="/img/StreetVerseRedLogo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
              ></span>
            </video>
          </div>
        <div className="container relative mx-auto">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"></div>
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

                    <h6 className="text-xl font-['Play'] font-semibold">Community</h6>

                    <p className="mt-2 mb-4 text-blueGray-500 font-['Play']">
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
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <FontAwesomeIcon icon="fa-solid fa-fingerprint" />
                    </div>
                    <h6 className="text-xl font-semibold font-['Play']">Access</h6>
                    <p className="mt-2 mb-4 text-blueGray-500 font-['Play']">
                      Purchase one of kind NFT merch drops directly from your
                      favorite streetwear brands.
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
                    <h6 className="text-xl font-semibold font-['Play']">Experiences</h6>
                    <p className="mt-2 mb-4 text-blueGray-500 font-['Play']">
                      A one-time fee will give you lifetime access to
                      unparalleled streetwear experiences around the world. Your
                      StreetVerse membership NFT is a tradable asset.
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
                <h2 className="text-4xl font-semibold text-Gray font-['Play']">Events</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-Gray-900 font-['Play']">
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
                  src="https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl  tracking-wide font-['Play']">London</h2>
                    <h2 className="text-3xl font-semibold tracking-wide font-['Play']">
                      London Fashion{" "}
                    </h2>
                    <p className="dark:text-gray-100 font-['Play']">
                      London Fashion Week Streetwear September 2023.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1587088155172-e9355df99c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80"
                  alt=""
                  className="object-cover object-top w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl  tracking-wide font-['Play']">New York</h2>
                    <h2 className="text-3xl font-semibold tracking-wide font-['Play']">
                      New York{" "}
                    </h2>
                    <p className="dark:text-gray-100 font-['Play']">
                      New York Fashion Week Streetwear September 2023.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl  tracking-wide font-['Play']">Paris</h2>
                    <h2 className="text-3xl font-semibold tracking-wide font-['Play']">
                      Paris Fashion{" "}
                    </h2>
                    <p className="dark:text-gray-100 font-['Play']">
                      Paris Fashion Week Streetwear September 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <Link to={'/events'}>
              <button className="dark:bg-gray-900 rounded-md dark:text-gray-100 mx-auto mt-7 p-3 inline-block text-lg font-['Play']">
                View All Events
              </button>
            </Link>
          </div>
        </section>

        <section className="pt-20 pb-8 md:pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center  justify-center ">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-Gray font-['Play']">
                  Our Community
                </h2>
                <p className="text-lg leading-relaxed m-4 mb-4 text-blueGray-500 font-['Play']">
                  A Community Built By StreetWear Fashion Lovers
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80&w=800&h=800"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold font-['Play']">Kazi Mizan</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold font-['Play']">
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
                    <h5 className="text-xl font-bold font-['Play']">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold font-['Play']">
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
                    <h5 className="text-xl font-bold font-['Play']">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold font-['Play']">
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
                    <h5 className="text-xl font-bold font-['Play']">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold font-['Play']">
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

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-32">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 pt-6 px-4">
                <h2 className="text-4xl font-semibold font-['Play'] text-white">
                  Your Membership is a Lifetime Asset
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400 font-['Play']">
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
                <h6 className="text-xl mt-5 font-semibold font-['Play'] text-white">
                  Community
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400 font-['Play']">
                  Become an insider everywhere. Join our invaluable community of
                  top street wear creators, producers, enthusiasts and
                  collectors.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon="fas fa-calendar" />
                </div>
                <h5 className="text-xl mt-5 font-semibold font-['Play'] text-white">
                  Experiences
                </h5>
                <p className="mt-2 mb-4 font-['Play'] text-blueGray-400">
                  A one-time fee will give you lifetime access to unparalleled
                  streetwear experiences around the world. Your StreetVerse
                  membership NFT is a tradable asset.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon="fas fa-fingerprint" />
                </div>
                <h5 className="text-xl mt-5 font-semibold font-['Play'] text-white">
                  Access
                </h5>
                <p className="mt-2 mb-4 font-['Play'] text-blueGray-400">
                  Purchase one of kind NFT merch drops directly from your
                  favorite streetwear brands.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
