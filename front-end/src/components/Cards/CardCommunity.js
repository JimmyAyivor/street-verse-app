import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardCommunity = ({ user, id }) => {
    return (


        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mt-[100px]



        ">
            <div className="px-6 mb-8">
                <Link to= { `/profile/${user.id}`}>
                <img
                    alt="..."
                    src={user.img}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                </Link>
                <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">{user.firstname} {user.lastname}</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        {user.occupation}
                    </p>
                    <div className="mt-3">
                        <button
                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                        >
                            <FontAwesomeIcon icon="fab fa-twitter" />
                        </button>
                        <button
                            className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                        >
                            <FontAwesomeIcon icon="fab fa-facebook-f" />
                        </button>
                        <button
                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                        >
                            <FontAwesomeIcon icon="fab fa-dribbble" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardCommunity