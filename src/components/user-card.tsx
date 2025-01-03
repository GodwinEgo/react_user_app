import { FaArrowRight, FaBuilding, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { User } from "../types";

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="p-4">
      <div className="p-6 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-md flex flex-col space-y-4 relative">
        <div className="flex-shrink-0">
          <img
            className="h-24 w-24 rounded-full border-4 border-white shadow-md"
            src={`https://i.pravatar.cc/150?u=${user.id}`}
            alt="User avatar"
          />
        </div>
        <div className="pt-4">
          <div className="text-2xl font-semibold text-gray-800">
            {user.name}
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <FaEnvelope className="mr-2 text-indigo-500" />
            <a
              href={`mailto:${user.email}`}
              className="font-medium hover:underline"
            >
              {user.email}
            </a>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <FaPhone className="mr-2 text-indigo-500" />
            <a
              href={`tel:${user.phone}`}
              className="font-medium hover:underline"
            >
              {user.phone}
            </a>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <FaBuilding className="mr-2 text-indigo-500" />
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              {user.company.name}
            </a>
          </div>
        </div>
        <Link
          to={`/user/${user.id}`}
          className="absolute bottom-4 right-4 text-white bg-[#4C59FB] p-2 rounded-full hover:bg-[#3b49e0]"
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
