import React, { useState } from "react";
import { emailRegex } from "./helper/regex";

const Form = ({ addUser }) => {
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    contactError: "",
  });
  const [formValid, setFormValid] = useState(false);

  const validateName = (name) => {
    let fNameError = error.nameError;
    let isValid = formValid;

    // validating name
    if (name.trim() === "") {
      fNameError = "This is required!";
      isValid = false;
    } else if (name.trim().length < 3) {
      fNameError = "Enter atleast 3 characters!";
      isValid = false;
    } else {
      isValid = true;
      fNameError = "";
    }

    // update state
    setFirstName(name);
    setFormValid(isValid);
    setError({ ...error, nameError: fNameError });

    return formValid;
  };

  const validateEmail = (email) => {
    let eError = error.emailError;
    let isValid = formValid;

    // validating email
    if (!emailRegex.test(email)) {
      eError = "This is invalid";
      isValid = false;
    } else {
      eError = "";
      isValid = true;
    }

    // update state
    setEmail(email);
    setFormValid(isValid);
    setError({ ...error, emailError: eError });

    return isValid;
  };

  const validateContact = (contact) => {
    //add validation
  };

  const handleChange = (e) => {
    // console.log(e);
    console.log(e.target.id);
    console.log(e.target.value);

    if (e.target.id == "firstname") {
      validateName(e.target.value);
    } else if (e.target.id == "email") {
      validateEmail(e.target.value);
    } else if (e.target.id == "contact") {
      validateContact(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName(firstname) && validateEmail(email)) {
      //   alert("form is submitted");
      setFirstName("");
      setEmail("");
      setContact("");
      //  const objname = {comma separated properties, method}
      const user = { firstname, email, contact }; //restructuring of object
      addUser(user);
      //api call post request
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">Enter FirstName</label>
      <input
        type="text"
        placeholder="Please enter name"
        id="firstname"
        name="firstname"
        onChange={handleChange}
        value={firstname}
      />
      <p style={{ color: "red" }}>{error.nameError}</p>

      <label htmlFor="email">Enter email*</label>
      <input
        type="email"
        placeholder="Please enter email"
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <p style={{ color: "red" }}>{error.emailError}</p>

      <label htmlFor="contact">Enter contact</label>
      <input
        type="text"
        placeholder="Please enter contact"
        id="contact"
        name="email"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;

//restructing of object
// let fname= "alina";
// let lName = "joe";
// let city = "pune";

// function features() {

// }

// let person = {
//     fname, lName, city, features
// }

// console.log(person);
