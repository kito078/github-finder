import React, { useEffect } from "react";
import UserResults from "../components/users/UserResults";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-6xl">
        <UserResults />>
      </h1>
    </div>
  );
}

export default Home;
