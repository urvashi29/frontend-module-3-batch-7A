import React from "react";

// const index = ({ user }) => {
//   return <div>{user.email}</div>;
// };

// export default index;

// export async function getServerSideProps(context) {
//   // access routing params at server side
//   const { params } = context;

//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}`
//   );
//   const data = await response.json();

//   return {
//     props: {
//       user: data,
//     },
//   };
// }

// accessing routuing params in client (useRouter)
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  console.log(router.query.id);
  //api call
  return <></>;
};

export default index;

