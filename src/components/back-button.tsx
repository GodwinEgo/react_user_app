import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center space-x-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
    >
      <FaArrowLeft />
      <span>Back</span>
    </button>
  );
};
