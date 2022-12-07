import React from "react";
import CardCommunities from "../../components/Cards/CardCommunities";


export default function UserCommunity() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCommunities color="dark" title="All Users" />
        </div>
      </div>
    </>
  );
}
