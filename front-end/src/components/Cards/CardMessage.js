import React from 'react'
import MessageTableDropdown from "../Dropdowns/MessageTableDropdown.js";
import Modal from '../Modals/MessageModal.js';

function CardMessage({ Message, openModal }) {
  const { created_at, email, fullname, id, message } = Message;

  return (<>
    <tr key={id}>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center list-decimal">
        <li></li>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {fullname}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {email}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {new Date(created_at).toDateString()}
      </td>

      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="overflow-hidden truncate w-14">
          {message}
        </div>
      </td>

      <Modal openModal={openModal} id={id} message={message} fullname={fullname} email={email} />
    </tr>
  </>
  )
}

export default CardMessage