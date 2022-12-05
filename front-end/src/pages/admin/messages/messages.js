import React from 'react'
import CardMessages from '../../../components/Cards/CardMessages';

export default function messages(openModal, closeModal) {
  return (
    <>
      <div className="flex flex-wrap mt-4">

        <div className="w-full mb-12 px-4">
          <CardMessages open={openModal} close={closeModal} color="dark" title="All Messages" />
        </div>
      </div>
    </>
  )
}
