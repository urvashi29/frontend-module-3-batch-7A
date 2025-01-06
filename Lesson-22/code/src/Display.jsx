import React from "react";

const Display = (props) => {
  console.log(props);
  
  const { firstName, designation } = props;

  return (
    <div>
      My name is {firstName}, working as a {designation}
    </div>
  );
};

console.log(Display);

//default values
Display.defaultProps = {
  firstName: "harry",
  designation: "manager",
};

export default Display;
