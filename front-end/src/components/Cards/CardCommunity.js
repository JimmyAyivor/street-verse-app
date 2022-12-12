import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardCommunity = ({user}) => {
    const {id, firstname,lastname,img,occupation} = user
    
    return (


        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mt-[100px]



        ">
            <div className=" mb-4 border-1 rounded border-solid bg-white p-2 height=[400px] width=[200px]">
                <Link to= { `/profile/${id}`}>
                <img
                    alt="..."
                    src={img}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                </Link>
                <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">{firstname} {lastname}</h5>
                    <p className="mt-1 text-sm text-blueGray-400  font-semibold">
                        {occupation}
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