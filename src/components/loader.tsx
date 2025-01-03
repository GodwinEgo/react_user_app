import { FaSpinner } from "react-icons/fa";

export const Loader = () => {
  return (
    <div className="absolute pl-72 inset-0 flex items-center justify-center bg-transparent z-50 w-full h-full">
      <FaSpinner className="text-[#08083A] animate-spin text-4xl" />
    </div>
  );
};
