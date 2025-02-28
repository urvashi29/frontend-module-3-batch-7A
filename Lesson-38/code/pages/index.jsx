// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     fetch("/api/getuser").then(async (res) => {
//       const response = await res.json();
//       if (!response.loggedIn) {
//         router.push("/login");
//       } else {
//         setUser(res);
//       }
//     }, []);
//   });

//   const handleLogout = async () => {
//     const response = await fetch("/api/logout");
//     router.push("/login");
//   };
//   return (
//     <>
//       Name: {user?.name}
//       <button onClick={handleLogout}>Logout</button>
//     </>
//   );
// };

// export default Home;

import React from "react";

const Home = () => {
  return <div>Welcome to NextJs!</div>;
};

export default Home;
