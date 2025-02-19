import { notFound, redirect } from "next/navigation";
import React from "react";

const index = ({ user }) => {
  return <div>{user.email}</div>;
};

export default index;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await response.json();

  //adding condition to restrict routingparameter file path
  if (params.id >= 100) {
    //     return {
    //       notFound: true,
    //     };

    // display a particular page
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      user: data,
    },
  };
}
