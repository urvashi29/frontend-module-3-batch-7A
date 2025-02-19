import React from "react";
import Link from "next/link";

const User = ({ users }) => {
  const userList = users.length ? (
    users.map((user) => {
      return (
        <p>
          <Link href={`/User/${user.id}`}>{user.username}</Link>
        </p>
      );
    })
  ) : (
    <p>No post Yet!</p>
  );

  return <div>{userList}</div>;
};

export default User;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
