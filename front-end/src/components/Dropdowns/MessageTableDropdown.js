import React from "react";
import { createPopper } from "@popperjs/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NotificationDropdown = ({openModal}) => {
  console.log();
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      {/* <Link
        className="text-blueGray-500 py-1 px-3"
        to="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <FontAwesomeIcon color={ 'white' } icon="fa-solid white fa-ellipsis-vertical" />      </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <button
         
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={() => openModal()}
        >
          View Message
        </button>
        <Link
          to="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Edit Message
        </Link>
        <Link
          to="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Delete Message
        </Link>
      </div> */}
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
