import React, { useState } from "react";

const Employee = () => {
  // const [state variable, method to update it] = useState(initial value);

  const [firstName, setFirstName] = useState("alina");
  const [age, setAge] = useState(20);
  const [city, setCity] = useState("pune");
  const [isValid, setIsValid] = useState(true);

  const [emp, setEmp] = useState({ id: 1, salary: 909000, name: "alex" });
  const [arr, setArr] = useState([90, 29, 3, 38]);

  const [users, setUsers] = useState([
    {
      id: 1,
      city: "Mumbai",
    },
    {
      id: 2,
      city: "Pune",
    },
  ]);

  const handleUpdate = () => {
    //to update state variables
    setFirstName("harry");
    setAge(90);
    setCity("hyderabad");

    setEmp({ ...emp, salary: 8980090 });
    setArr([...arr, 100, 200]);

    // to update array of objects
    let newUsers = [...users];
    newUsers[0].city = "Banglore";
    console.log(newUsers);
    setUsers(newUsers);
  };

  return (
    <>
      <p>Name: {firstName}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>

      <h4>Object Display</h4>
      <p>Employee Name: {emp.name}</p>
      <p>Salary: {emp.salary}</p>

      <p>{arr.map((item) => item)}</p>

      <p>
        {users.map((user) => {
          return <p>{user.city}</p>;
        })}
      </p>

      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default Employee;
