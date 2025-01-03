import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton, Loader } from "../../components";

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6  mx-auto">
      <BackButton />
      <div className="p-6 mt-4 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-md flex flex-col space-y-4 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">User Details</h1>
        </div>
        {user && (
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <img
                className="h-32 w-32 rounded-full border-4 border-white shadow-md"
                src={`https://i.pravatar.cc/150?u=${user.id}`}
                alt="User avatar"
              />
              <div>
                <p className="text-2xl font-semibold text-gray-800">
                  {user.name}
                </p>
                <p className="text-gray-600">@{user.username}</p>
              </div>
            </div>
            <div className="space-y-4">
              <p>
                <strong className="text-gray-700">Email:</strong>{" "}
                <a
                  href={`mailto:${user.email}`}
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  {user.email}
                </a>
              </p>
              <p>
                <strong className="text-gray-700">Phone:</strong>{" "}
                <a
                  href={`tel:${user.phone}`}
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  {user.phone}
                </a>
              </p>
              <p>
                <strong className="text-gray-700">Website:</strong>{" "}
                <a
                  href={`http://${user.website}`}
                  className="text-indigo-500 hover:text-indigo-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.website}
                </a>
              </p>
              <p>
                <strong className="text-gray-700">Address:</strong>{" "}
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </p>
              <p>
                <strong className="text-gray-700">Company:</strong>{" "}
                {user.company.name}
              </p>
              <p>
                <strong className="text-gray-700">Catch Phrase:</strong>{" "}
                {user.company.catchPhrase}
              </p>
              <p>
                <strong className="text-gray-700">BS:</strong> {user.company.bs}
              </p>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailsPage;
