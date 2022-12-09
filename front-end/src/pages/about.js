import React from "react";

export default function About() {
    return (
        <>
            <main>

            <div
          className="relative flex items-center justify-center h-screen mb-20
         overflow-hidden"
        >
          <div className=" container object-cover h-48 w-96 text-center mx-auto flex flex-col items-center justify-center space-y-8 md:p-10 md:px-24 xl:px-48 z-30 p-5 text-white bg-blueGray-500 bg-opacity-50 rounded-xl">
            <div className="">
              <h1 className="font-bold leading-none text-center font-['Play'] text-yellow-500 text-[42px] sm:text-6xl md:text-7xl lg:text-[85px] justfy-center object-center">
               About Us
              </h1>
              <p className="mt-4 md:text-2xl pt-2 pb-8 font-['Play'] text-yellow-200 leading-5 font-medium text-center ">
              About Us
StreetVerse is the world’s premier global NFT streetwear club. We are a community built by fashion lovers, founded to celebrate the authenticity and diversity of streetwear culture. Our members will have access to a world of premier releases and events, exclusive access to the latest drops, and an elite community of like-minded enthusiasts and experts - not to mention some of the most interesting designers on the planet.</p>
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
              className="w-full h-full absolute opacity-75 bg-blueGray-500"
            ></span>
            <source src="/img/AboutUs2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
               
            </main>
        </>
    )
}
