import React from 'react'
import Modal from '../Modals/UserModal.js';

function CardMessage({ User, openModal }) {
  const { id, firstname, lastname, email, status, img, roles, bio, created_at } = User;

  return (
    <tr key={id}>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex">

          <img
            src={img}
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow mr-2"
          ></img>

          {firstname} {lastname}<br></br>
          {email}</div>

      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {status}
      </td>

      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {roles}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {new Date(created_at).toDateString()}
      </td>

      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="overflow-hidden truncate w-14">
          {bio}
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
        <Modal openModal={openModal} id={id} user={User} firstname={firstname} email={email} />
      </td>
    </tr>
  )
}

export default CardMessage