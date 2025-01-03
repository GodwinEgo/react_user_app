import { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Loader, UserCard } from "../../components";
import { User } from "../../types";

const HomePage = ({ searchQuery }: { searchQuery: string }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <div className="flex flex-col items-center justify-center h-[90vh] col-span-full">
          <FaExclamationCircle className="text-6xl text-gray-400" />
          <p className="text-gray-600 mt-4">No matching users found.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
