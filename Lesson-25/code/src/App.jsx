import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (props) => {
    console.log(props); //object
    setUsers([...users, props]);
  };

  return (
    <>
      <Form addUser={addUser} />
      <Display users={users} />
    </>
  );
};

export default App;

{
  /* <Route path="/" element={<Home />} /> */
}
