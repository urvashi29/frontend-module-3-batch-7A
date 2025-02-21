import React from "react";
import styled from "styled-components";

const Employee = () => {
  const Button = styled.button`
    background-color: teal;
    color: white;
    border: none;
    &:hover {
      background-color: pink;
    }
  `;

  return (
    <>
      <Button>Click Me!</Button>
    </>
  );
};

export default Employee;
