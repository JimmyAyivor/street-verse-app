import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modals/EventModal.js";
// components

export default function CardMessages({Event,openModal}) {

  const { id, title,short_desc,thumbnail,date} = Event;


  
  return (
    <>
          <tr key={thumbnail}>
  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center list-decimal">
   <li></li>
  </th>
  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    {title}
  </td>
  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    {date}
  </td>
  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  {short_desc}
  </td>
  
  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    <div className="overflow-hidden truncate w-14">
    {short_desc}
    </div>
  </td>
  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
  <Modal openModal={openModal} id={id} event={Event} title={title} date={date} />
  </td>
  </tr>
    </>
  );
}

CardMessages.defaultProps = {
  color: "light",
};

CardMessages.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
