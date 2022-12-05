import React from 'react'
import CardEvents from '../../../components/Cards/CardEvents.js';

export default function events() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
       
        <div className="w-full mb-12 px-4">
          <CardEvents color="dark"title="All Events"/>
        </div>
      </div>
    </>
  )
}
