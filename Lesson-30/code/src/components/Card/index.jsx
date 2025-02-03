import React from "react";
import Grid from "@mui/material/Grid2";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { onDeleteEmployee } from "../../action";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "orange",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const index = ({ emp }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(onDeleteEmployee(id))
  };

  return (
    <Grid key={emp.empId} size={{ xs: 2, sm: 4, md: 4 }}>
      <Item>
        {emp.name}
        {emp.age}

        <button onClick={() => handleDelete(emp.empId)}>Delete</button>
      </Item>
    </Grid>
  );
};

export default index;
