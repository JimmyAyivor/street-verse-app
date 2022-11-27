
import React from "react";

export default function About() {
    return (
        <>
            <main>

                <div className="relative pt-40 pb-32 flex content-center items-center justify-center min-h-screen-75">

                    <div
                        className="relative z-30 p-5 text-2xl text-white bg-blue-600 bg-opacity-50 rounded-xl"
                    >

                        <div className="pr-12">
                            <h1 className="text-white font-semibold text-6xl justfy-center object-center text-center ">
                                About Us
                            </h1>
                            <p className="mt-4 text-2xl text-blueGray-200 ">
                                Become an insider everywhere. Join our invaluable community of top street wear creators, producers, enthusiasts and collectors.
                            </p>
                        </div>
                    </div>

                    <img
                        alt="..."
                        src="/img/stbanner.jpeg"
                        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                    >




                    </img>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">

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
                <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-6">
                                <h2 className="text-6xl font-semibold">About Us</h2>
                                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                    StreetVerse is the world’s premier global NFT streetwear club. We are a community built by fashion lovers, founded to celebrate the authenticity and diversity of streetwear culture. Our members will have access to a world of premier releases and events, exclusive access to the latest drops, and an elite community of like-minded enthusiasts and experts - not to mention some of the most interesting designers on the planet.
                                </p>
                            </div>
                        </div>
                      
                    </div>
                </section>
            </main>
        </>
    )
}
