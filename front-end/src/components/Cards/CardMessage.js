import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from '../Modals/MessageModal.js';
const API = process.env.REACT_APP_API_URL;

function CardMessage({ Message, openViewModal,openDeleteModal}) {
  const { created_at, email, fullname, id, message } = Message;
const navigate = useNavigate()
const refreshPage = () => {
  navigate(0);
}
  const handleDelete = () => {
    axios
      .delete(`${API}/messages/${id}`)
      .then((response) => navigate(`/admin/messages`))
      refreshPage()
      .catch((error) => console.projects(error));
  };
  

  return (<>
    <tr>
      <td className="border-t-0 font-semibold px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {fullname}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {email}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {new Date(created_at).toDateString()}
      </td>

      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="truncate w-64">
          {message}
        </div>
      </td>

      <Modal  openViewModal={openViewModal} openDeleteModal={openDeleteModal} id={id} message={message} fullname={fullname} email={email} handleDelete={handleDelete} />
    </tr>
  </>
  )
}

export default CardMessage