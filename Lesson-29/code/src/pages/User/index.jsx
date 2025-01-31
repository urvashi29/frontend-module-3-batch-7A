import React, { useState, useMemo, useCallback } from "react";
import UserList from "../../components/UserList";
import Filter from "../../components/Filter";

const index = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John", active: true },
    { id: 2, name: "Jane", active: false },
    { id: 3, name: "Mike", active: true },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    if (filter === "active") {
      return users.filter((user) => user.active);
    } else if (filter === "inactive") {
      return users.filter((user) => !user.active);
    } else {
      return users;
    }
  }, [users, filter]);

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  return (
    <>
      <h1>User Filter App</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <UserList users={filteredUsers} />
    </>
  );
};

export default index;
