import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [name, setName] = useState("alex");
  const [users, setUsers] = useState([]);

  //   componentDidMount: callback function called on initial component render
  useEffect(() => {
    //logic
    //api calls
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   componentDidUpdate: whenever state variable- name is upadated callback function is called
  useEffect(() => {
    //post request
    console.log("state update");
  }, [name]);

  //   useEffect(() => {

  //   }, [age]);

  // componentWillUnmount
  useEffect(() => {
    console.log("");
    // add attach event
    // setTimeout()

    return () => {
      // clearTimeout();
      // element.removeEventListerner
    };
  }, [name]);

  const handleUpdate = () => {
    setName("alina");
  };

  return (
    <div>
      {name}
      <button onClick={handleUpdate}>Update</button>

      <p>
        {users.length ? (
          users.map((user) => {
            return <p>{user.username}</p>;
          })
        ) : (
          <p>No Post Yet!</p>
        )}
      </p>
    </div>
  );
};

export default UseEffectHook;
