import React, { useState, useEffect } from "react";
import Users from "./components/Users";
// dsjfksdfjsd
const App = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("404 not found");
        }
        return res.json();
      })
      .then((res) => {
        setUsers(res);
        setIsLoading(false);
      })
      .catch((err) => {
        seterror(err.message);
      });
  }, []);

  // step2 : use useEffect for fetching the data including updating isLoading and error states

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {users && <Users users={users} />}
    </div>
  );
};

export default App;
