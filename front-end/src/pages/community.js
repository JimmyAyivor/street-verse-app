import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Community() {
  return (
    <>
      <main>
        <div
          className="relative flex items-center justify-center h-[900px] mb-10 overflow-hidden">
          <div className=" container text-center mx-auto flex flex-col items-center justify-center space-y-8 md:p-10 md:px-24 xl:px-48 z-30 p-5 bg-gray-900 bg-opacity-50 rounded-xl">
            <div>
              <h1 className="font-bold leading-none text-center  text-yellow-500 text-[42px] sm:text-6xl md:text-7xl lg:text-[85px] justfy-center object-center font-['Play'] ">
                C o m m u n i t y
              </h1>
              <p className="mt-4 md:text-[25px] pt-4 pb-8 leading-5 font-medium text-center font-['Play'] text-yellow-200">
                Become an insider everywhere. Join our invaluable community of
                top street wear creators, producers, enthusiasts and collectors.
              </p>
            </div>
          </div>
              
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
            <source src="/img/MyMovie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
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
          
          </svg>
        </div>
        <section className="pt-[1px] pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-5xl font-semibold font-['Play']">Our Community</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500 font-['Play']">
                  A Community Built By StreetWear Fashion Lovers
                  <div></div>
                  Together, We Are Curious, Generous, Inclusive
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6 mb-8">
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
                    <div className="mt-3">
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
                    <div className="mt-3">
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
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80&h=800&w=800"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold font-['Play']">Aioni Haust</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold font-['Play']">
                      Stylist
                    </p>
                    <div className="mt-3">
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
                    src="https://images.unsplash.com/photo-1624223237138-21a37e61dec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80&h=800&w=800"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold font-['Play']" >Tracy Morgan</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold font-['Play']">
                      Model
                    </p>
                    <div className="mt-3">
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
                    src="https://images.unsplash.com/photo-1585185590319-d68abacc7848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80&w=800&h=800"
                    className="shadow-lg mx-auto max-w-120-px object-cover rounded-full"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold font-['Play']">Amy True</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold font-['Play']">
                      Stylist
                    </p>
                    <div className="mt-3">
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
                    src="/img/comm1.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold font-['Play']">Charlie South</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold font-['Play']">
                      Stylist
                    </p>
                    <div className="mt-3">
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
                    <div className="mt-3">
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
                    <div className="mt-3">
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
      </main>
    </>
  );
}
