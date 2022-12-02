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
                place all over the world!
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
              <p className="text-lg leading-relaxed mt-4 mb-4 text-Gray-900">
                Get a sneak peek at our exciting members-only events, taking
                place all over the world! Participate in the discussions on our
                private Discord channels to request or suggest new events.
              </p>
            </div>
          </div>
        </div>

        <section>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap place-content-evenly gap-2">
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
              <section>
                <div className="pt-20 pb-10">
                  <div className="container mx-auto px-4 ">
                    <div className="flex flex-wrap text-center justify-center">
                      <div className="w-full lg:w-6/12 px-4">
                        <h2 className=" italic text-4xl font-semibold text-Gray">
                          Member only events
                        </h2>
                        <p className="text-lg leading-relaxed mt-4 mb-6 text-Gray-900">
                          Get a sneak peek at our exciting members-only events,
                          taking place all over the world! Participate in the
                          discussions on our private channels to request or
                          suggest new events.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto px-4">
                    <div className="flex flex-wrap place-content-evenly mb-9 gap-2">
                      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img
                          src="img/supreme.jpeg"
                          alt=""
                          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                        />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                          <div className="space-y-2">
                            <h2 className="text-2xl  tracking-wide">Paris</h2>
                            <h2 className="text-3xl font-semibold tracking-wide">
                              Paris Fashion Week{" "}
                            </h2>
                            <p className="dark:text-gray-100">
                              Supreme Louis Vuitton runway show September 2023.
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
                            <h2 className="text-2xl  tracking-wide">
                              New York
                            </h2>
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
                          src="img/heron.jpeg"
                          alt=""
                          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                        />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                          <div className="space-y-2">
                            <h2 className="text-2xl  tracking-wide">
                              New York
                            </h2>
                            <h2 className="text-3xl font-semibold tracking-wide">
                              New York Fashion Week
                            </h2>
                            <p className="dark:text-gray-100">
                              Preston Heron runway September 2023.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img
                          src="img/swooshnike.jpg"
                          alt=""
                          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                        />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                          <div className="space-y-2">
                            <h2 className="text-2xl  tracking-wide">
                              New York
                            </h2>
                            <h2 className="text-3xl font-semibold tracking-wide">
                              New York{" "}
                            </h2>
                            <p className="dark:text-gray-100">
                              Polygon Ignite Nike .Swoosh Web3 event June 2023.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
