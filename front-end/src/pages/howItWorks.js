import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HowItWorks() {
  return (
    <>
      <main>
        <div className="relative flex items-center justify-center h-screen mb-9 overflow-hidden"
        >
          <div className=" container text-center mx-auto flex flex-col items-center justify-center space-y-8 md:p-10 md:px-24 xl:px-48 z-30 p-5 text-white bg-gray-600 bg-opacity-50 rounded-xl">
            <div className="">
              <h1 className="font-bold leading-none text-center text-white text-[42px] sm:text-6xl md:text-7xl lg:text-[85px] justfy-center object-center">
                How It Works
              </h1>
              <p className="mt-4 md:text-2xl pt-2 pb-8 leading-5 font-medium text-center ">
                Think of a StreetVerse Membership as your golden ticket into
                a world of unrivalled global experiences. Purchased in the
                form of a Non-Fungible Token (NFT), this unique digital
                asset unlocks the door to an invaluable community of fashion
                lovers, collectors and investors, and gives members
                unparalleled access to some of the most exclusive streetwear
                offers and events on the planet.
              </p>
            </div>
          </div>

          <video
            autoPlay
            loop
            muted
            className="absolute w-full"
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
            <source src="/img/HowitWorks.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <span id="blackOverlay" className="w-full h-full absolute opacity-0 bg-gray-600" ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  How It Works
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">

                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >

          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>

        </div>


        <section className="relative flex bg-blueGray-200 pb-20  -mt-60">
          <div className="container mx-auto px-10">
            <div className="flex flex-wrap">
              <div className="pt-5 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <a href="#benefits"><div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                    </div></a>
                    <a href="#benefits"><h6 className="text-xl text-blue-600 font-semibold">Benefits</h6>
                      <p className="text- font-semibold"> Click here to Explore the benefits you get with a StreetVerse membership below.</p></a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-6 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb- shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <a href="#nft"><div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <FontAwesomeIcon icon="fa-solid fa-circle-nodes" />
                    </div></a>
                    <a href="#nft"><h6 className="text-xl text-blue-600 font-semibold">What are NTFs</h6>
                      <p className="text- font-semibold"> Click here to learn more about NFT's</p></a>
                  </div>
                </div>
              </div>

              <div className="pt-5 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <a
                      href="/contact"
                      class="text-blue-600 hover:text-blue-700 underline transition duration-300 ease-in-out mb-4"
                    ><div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <FontAwesomeIcon icon="fa-solid fa-phone" />
                    </div></a>

                    <a
                      href="/contact"
                      class="text-blue-600 hover:text-blue-700 underline transition duration-300 ease-in-out mb-4"
                    >
                      <h6 className="text-xl font-semibold">Contact Us</h6>
                    </a><p className="text- font-semibold"> Should you have any questions you can reach us here:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon id="benefits" className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" ></polygon>
            </svg>
          </div>




          <div className="container text-left mx-auto flex flex-col items-center justify-left space-y-8 md:p-10 md:px-24 xl:px-48 relative z-30 p-5 text-white  rounded-xl">
            <div >
              <div >
                <img alt="..." className="rounded-xl shadow-xl opacity-100 brightness-50 "
                  src="https://www.essence.com/wp-content/uploads/2016/03/images/2016/03/07/gettyimages-513914516_master.jpg" />
              </div>
              <div class="absolute text-2xl top-1/2 left-1/2
                   -translate-x-1/2 -translate-y-1/2">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-15 h-15 mb-5 shadow-lg rounded-full bg-blue-400">
                  <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                </div>
                <h3 className="text-4xl text-white font-semibold">
                  Benefits
                </h3>
                <p className="mt-10 text-2xl text-white leading-relaxed font-semibold">
                  THE COMMUNITY: Join our unique global community for access to
                  the most exclusive streetwear in the world. Communicate with
                  enthusiastic designers and fashionistas.
                </p>
                <p className="mt-10 text-2xl text-white leading-relaxed font-semibold">
                  EVENTS & EXPERIENCES: Join the who’s who of the streetwear
                  fashioin scene at our specially curated member events. We will
                  be hosting semi-annual shows and dinners in Paris, London,
                  NYC, LA, HK, SF and Miami!
                </p>
                <p className="mt-10 text-2xl text-white leading-relaxed font-semibold">
                  EXCLUSIVE OFFERS: Get access to some of the most hard-to-find
                  streetwear direct from the designers!
                </p>
              </div>
            </div>

          </div>
        </section>

        <section id="nft" className="relative py-20">

          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >

          </div>


          <div>
            <div className="container text-left mx-auto flex flex-col items-center justify-left space-y-8 md:p-10 md:px-24 xl:px-48 relative z-30 p-5 text-white  rounded-xl">
              <div>
                <img alt="..."
                  className="bg-center bg-cover max-w-full rounded-xl shadow-xl brightness-50"
                  src="https://d1e00ek4ebabms.cloudfront.net/production/8b88f4e2-2cf9-4088-96d7-f97b007abf79.jpg?source=next&fit=scale-down&quality=highest&width=1067&dpr=1" />
              </div>

              <div class="absolute text-4xl top-1/2 left-1/2
                   -translate-x-1/2 -translate-y-1/2">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-15 h-15 mb-5 shadow-lg rounded-full bg-red-400">
                  <FontAwesomeIcon icon="fa-solid fa-circle-nodes" />
                </div>
                <h3 className="text-4xl text-white font-semibold">What are NTFs</h3>
                <p className="mt-10 text-2xl text-white  leading-relaxed font-semibold">
                  Non-fungible tokens (NFTs) are cryptographic assets on a
                  blockchain with unique identification codes and metadata
                  that distinguish them from each other.
                </p>
                <p className="mt-8 text-2xl  text-white leading-relaxed font-semibold">
                  As a StreetVerse member, you’ll have the keys to unlock a
                  world of beautifully unique streetwear, exclusive offers on
                  rare items, and an entire community of like-minded
                  enthusiasts - not to mention some of the most interesting
                  designers on the planet.
                </p>
              </div>
            </div>


          </div>
        </section>

        <section className="pb-20 relative block bg-white">
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
                className="text-black fill-current"
                points="0 2560 0 2560 100  100"
              ></polygon>

            </svg>
          </div>
        </section>
      </main>
    </>
  );
}
