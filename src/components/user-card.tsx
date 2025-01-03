import { FaBuilding, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UserCard = ({ user }: any) => {
  return (
    <div className="p-4">
      <div className="p-6 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="relative">
          <img
            className="h-24 w-24 rounded-full border-4 border-white shadow-md"
            src={`https://i.pravatar.cc/150?u=${user.id}`}
            alt="User avatar"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-gray-800">
            {user.name}
          </div>
          <div className="flex items-center justify-center text-gray-600 mt-2">
            <FaEnvelope className="mr-2 text-indigo-500" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center justify-center text-gray-600 mt-2">
            <FaPhone className="mr-2 text-indigo-500" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center justify-center text-gray-600 mt-2">
            <FaBuilding className="mr-2 text-indigo-500" />
            <span>{user.company.name}</span>
          </div>
          <Link
            to={`/user/${user.id}`}
            className="text-indigo-500 hover:text-indigo-600 mt-4 inline-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
