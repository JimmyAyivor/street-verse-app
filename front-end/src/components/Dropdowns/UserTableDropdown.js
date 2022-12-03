import React from "react";
const NotificationDropdown = ({openModal}) => {
  
  return (
    <>
      
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
  
  <button href="#" onClick={() => openModal()} className="text-gray-400 hover:text-gray-100  mr-2">
    <i className="material-icons-outlined text-base">visibility</i>
    

  </button>
  <button href="#" onClick={() => openModal()} className="text-gray-400 hover:text-gray-100 mx-2">
    <i className="material-icons-outlined text-base">edit</i>
    

  </button>
  <button href="#" onClick={() => openModal()} className="text-gray-400 hover:text-gray-100 ml-2">
    <i className="material-icons-round text-base">delete_outline</i>
    

  </button>

</td>
    </>
  );
};

export default NotificationDropdown;
