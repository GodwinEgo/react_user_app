import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";

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
    <div className="p-6 max-w-2xl mx-auto bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      {user && (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`http://${user.website}`}
              className="text-indigo-500 hover:text-indigo-600"
            >
              {user.website}
            </a>
          </p>
          <p>
            <strong>Address:</strong> {user.address.street},{" "}
            {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
          <p>
            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {user.company.bs}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
