import React from "react";



export default function Events() {
  return (
    <>
      <main>
        <div
          className="relative flex items-center justify-center h-screen mb-20
         overflow-hidden"
        >
          <div className="container text-center mx-auto flex flex-col items-center justify-center space-y-8 md:p-10 md:px-24 xl:px-48relative rounded-xl z-30 p-5 text-white ">
            <div className="">
              <h1 className="font-bold leading-none text-center text-white text-[42px] sm:text-6xl md:text-7xl lg:text-[85px] justfy-center object-center">
                Events
              </h1>
              <p className="mt-4 md:text-2xl pt-2 pb-8 leading-5 font-medium text-center">
                Get a sneak peek at our exciting members-only events, taking
                place all over the world! Participate in the discussions on our
                private Discord channels to request or suggest new events.
              </p>
            </div>
          </div>

          <video
            autoPlay
            loop
            muted
            className="absolute -z-[100] bg-cover m-auto w-full h-full -right-[100%] -bottom-[100%] -top-[100%] -left-[100%] object-cover"
          >
            <source src="/img/event2.mp4" type="video/mp4" />
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
          ></svg>
        </div>
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-Gray">Events</h2>
              <p className="text-2xl leading-relaxed mt-4 mb-4 text-Gray-900">
                Inside look at some upcoming events
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl p-5 mx-auto text-gray-100">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 lg:h-[600px] bg-gray-500 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 cursor-pointer"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <p
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 "
                >
                  London
                </p>
                <div className="flex flex-col justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    2023
                  </span>
                  <span className="leading-none uppercase">Sep</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <p
                  className="font-medium text-md hover:underline text-gray-100"
                >
                  {" "}
                  London Fashion Week
                </p>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-top bg-cover h-96 lg:h-[600px] bg-gray-500 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 cursor-pointer"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1587088155172-e9355df99c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <p
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 "
                >
                  New York
                </p>
                <div className="flex flex-col justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    2023
                  </span>
                  <span className="leading-none uppercase">Oct</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <p
                  className="font-medium text-md hover:underline text-gray-100"
                >
                  New York Fashion Week
                </p>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-top bg-cover h-96 lg:h-[600px] bg-gray-500 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 cursor-pointer"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <p
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 "
                >
                  Paris
                </p>
                <div className="flex flex-col justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    2023
                  </span>
                  <span className="leading-none uppercase">Nov</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <p
                  className="font-medium text-md hover:underline text-gray-100"
                >
                  Paris Fashion Week
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div className="h-40" />

        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className=" italic text-4xl font-semibold text-Gray">
                Members Only
              </h2>
              <p className="text-2xl leading-relaxed italic mt-4 mb-6 text-Gray-900">
                Once-In-A-Lifetime Events
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl p-5 mx-auto text-gray-100">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
            <div
              className="relative flex items-end justify-start w-full text-left bg-top bg-cover h-96 lg:h-[600px] bg-gray-500 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 cursor-pointer"
              style={{
                backgroundImage: "url(img/supreme.jpeg)",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <p
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 "
                >
                  Paris
                </p>
                <div className="flex flex-col justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    2023
                  </span>
                  <span className="leading-none uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <p
                  className="font-medium text-md hover:underline text-gray-100"
                >
                  {" "}
                  Supreme x Louis Vuitton Fashion Show
                </p>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-top bg-cover h-96 lg:h-[600px] bg-gray-500 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 cursor-pointer"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1608228088998-57828365d486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1382&q=80)",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <p
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 "
                >
                  London
                </p>
                <div className="flex flex-col justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    2023
                  </span>
                  <span className="leading-none uppercase">Oct</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <p
                  className="font-medium text-md hover:underline text-gray-100"
                >
                  Tour the famous Vogue house
                </p>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 lg:h-[600px] bg-gray-500 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 cursor-pointer"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <p
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 "
                >
                  New York
                </p>
                <div className="flex flex-col justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    2023
                  </span>
                  <span className="leading-none uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <p
                  className="font-medium text-md hover:underline text-gray-100"
                >
                  Meet one of streetwears most exciting desingers
                </p>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 lg:h-[600px] bg-gray-500 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 cursor-pointer"
              style={{
                backgroundImage: "url(img/swooshnike.jpg)",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <p
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 "
                >
                  New York
                </p>
                <div className="flex flex-col justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    2023
                  </span>
                  <span className="leading-none uppercase">Jun</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <p
                  className="font-medium text-md hover:underline text-gray-100"
                >
                  Polygon Ignite Nike .Swoosh Web3 event.
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div className="h-40" />
      </main>
    </>
  );
}
