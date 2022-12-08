import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modals/UserModal.js';

function CardMessage({ User, viewModal }) {
  const { id, firstname, lastname, email, status, img, roles, bio, created_at } = User;
  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate()
  const refreshPage = () => {
    navigate(0);
  }
    const handleDelete = () => {
      axios
        .delete(`${API}/users/${id}`)
        .then((response) => navigate(`/admin/users`))
        refreshPage()
        .catch((error) => console.projects(error));
    };
    


  return (
    <tr key={id}>
      <Link to={`/profile/${id}`}>
      <td className="border-t-0 font-semibold px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex">

          <img
            src={img}
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow mr-2"
          ></img>

          {firstname} {lastname}<br></br>
          {email}</div>

      </td></Link>
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
        <div className="truncate w-64">
          {bio}
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
        <Modal viewModal={viewModal} id={id} user={User} firstname={firstname} email={email} handleDelete={handleDelete}/>
      </td>
    </tr>
  )
}

export default CardMessage