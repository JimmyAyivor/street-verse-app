import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HowItWorks() {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLbGpjHpcZeA2QZgHIOLLzyxSt0MZVCZFVA&usqp=CAU')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    How It Works
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                    </div>
                    <h6 className="text-xl font-semibold">Benefits</h6>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <FontAwesomeIcon icon="fa-solid fa-circle-nodes" />
                    </div>
                    <h6 className="text-xl font-semibold">What are NTFs</h6>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <FontAwesomeIcon icon="fa-solid fa-phone" />
                    </div>
                    <p className="text-xl font-semibold"> Should you have any questions you can reach us here:</p>
                    <a
                      href="/contact"
                      class="text-blue-600 hover:text-blue-700 underline transition duration-300 ease-in-out mb-4"
                    >
                      <h6 className="text-xl font-semibold">Contact Us</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
 <div className="w-full md:w-8/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-20 shadow-lg rounded-lg bg-blueGray-700">
                  <div class="bg-cover bg-center ...">
                    <img
                      alt="..."
                      className="max-w-full w-auto rounded-lg shadow-lg opacity-80"
                      src="https://cdn.cliqueinc.com/posts/301747/copenhagen-fashion-week-street-style-spring-summer-2023-301747-1660167146432-main.900x0c.jpg?interlace=true&quality=70"
                    />
                  </div>
                </div>
              </div>
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Benefits
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  THE COMMUNITY: Join our unique global community for access to
                  the most exclusive streetwear in the world. Communicate with
                  enthusiastic designers and fashionistas.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  EVENTS & EXPERIENCES: Join the who’s who of the streetwear
                  fashioin scene at our specially curated member events. We will
                  be hosting semi-annual shows and dinners in Paris, London,
                  NYC, LA, HK, SF and Miami!
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  EXCLUSIVE OFFERS: Get access to some of the most hard-to-find
                  streetwear direct from the designers!
                </p>
              </div>

             
            </div>
          </div>
        </section>

        <section className="relative py-20">
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

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              
              <div class="bg-cover bg-center ...">
              <span id="blackOverlay" className="w-full h-full blur-sm opacity-40 bg-black"> 
              <img alt="..."
                  className="max-w-full w-auto rounded-lg shadow-lg"
                  src="https://d1e00ek4ebabms.cloudfront.net/production/8b88f4e2-2cf9-4088-96d7-f97b007abf79.jpg?source=next&fit=scale-down&quality=highest&width=1067&dpr=1"/> 
              </span>
             </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <br></br>

                  <div class="absolute text-4xl top-1/2 left-1/2
                   -translate-x-1/2 -translate-y-1/2">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-15 h-15 mb-5 shadow-lg rounded-full bg-red-400">
                      <FontAwesomeIcon icon="fa-solid fa-circle-nodes" />
                    </div>
                    <h3 className="text-4xl text-blueGray-800 font-semibold">What are NTFs</h3>
                    <p className="mt-10 text-2xl text-blueGray-800 leading-relaxed font-semibold">
                      Non-fungible tokens (NFTs) are cryptographic assets on a
                      blockchain with unique identification codes and metadata
                      that distinguish them from each other.
                    </p>
                    <p className="mt-8 text-2xl  text-blueGray-800 leading-relaxed font-semibold">
                      As a StreetVerse member, you’ll have the keys to unlock a
                      world of beautifully unique streetwear, exclusive offers on
                      rare items, and an entire community of like-minded
                      enthusiasts - not to mention some of the most interesting
                      designers on the planet.
                    </p>
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
        </section>
      </main>
    </>
  );
}
