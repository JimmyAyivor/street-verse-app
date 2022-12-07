import React from "react";
import CardUserEvents from "../../components/Cards/CardUserEvents";

export default function events() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardUserEvents />
        </div>
      </div>
    </>
  );
}
