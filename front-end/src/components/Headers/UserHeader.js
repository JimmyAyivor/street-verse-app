
import React from "react";

export default function UserHeader({ title,subHeading }) {

  return (
    <>
      <div className="relative bg-blueGray-800  pb-5 pt-20">

        <div className="relative"><h1 className="font-bold leading-none text-center text-white text-[30px] sm:text-6xl md:text-7xl lg:text-[30px] justfy-center object-center mt-0">{title}</h1>

          <p class="text-lg  text-center leading-relaxed mt-4 mb-4 text-blueGray-400">{subHeading}</p>

        </div>

      </div>
    </>
  );
}
