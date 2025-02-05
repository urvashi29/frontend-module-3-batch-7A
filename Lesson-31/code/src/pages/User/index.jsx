import React, { useEffect, useState } from "react";
import axios from "axios";

const index = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <div data-testid="text">{users.name}</div>;
};

export default index;
