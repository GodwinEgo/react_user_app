import { useEffect, useState } from "react";
import { Loader, UserCard } from "../../components";

const HomePage = () => {
  const [users, setUsers] = useState<
    {
      id: number;
      name: string;
      email: string;
      phone: string;
      company: { name: string };
    }[]
  >([]);
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        //@ts-ignore
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default HomePage;
