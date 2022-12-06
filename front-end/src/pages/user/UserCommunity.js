import React from "react";
import CardUsers from "../../components/Cards/CardUsers"

export default function UserCommunity() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardUsers color="dark" title="All Users" />
        </div>
      </div>
    </>
  );
}
