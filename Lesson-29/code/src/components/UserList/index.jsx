import React, { Fragment } from "react";

const index = ({ users }) => {
  const userList = users.map((user) => <li key={user.id}>{user.name}</li>);

  return (
    <>
      <h2>User List</h2>
      <ul>{userList}</ul>
    </>
  );
};

export default index;

// import React from 'react';

// const index = () => {
//   return (
//     <Fragment key={}>

//     </Fragment>
//   );
// };

// export default index;
