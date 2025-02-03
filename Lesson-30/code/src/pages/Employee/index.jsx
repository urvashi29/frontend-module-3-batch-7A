import React, { useState } from "react";
import { onAddEmployee } from "../../action";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const index = () => {
  const employees = useSelector((state) => state.employees);
  console.log(employees);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id == "name") {
      //validation
      setName(e.target.value);
    }
    if (e.target.id == "age") {
      //validation
      setAge(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const empId = "EMP" + Math.floor(Math.random() * 10 + 1007980);
    const emp = { name, age, empId };

    dispatch(onAddEmployee(emp)); //send emp to reducer
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          placeholder="Please enter name"
          id="name"
          onChange={handleChange}
        />
        <label htmlFor="age">Enter Name</label>
        <input
          type="number"
          placeholder="Please enter age"
          id="age"
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {employees.map((emp) => (
            <Card emp={emp} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default index;
