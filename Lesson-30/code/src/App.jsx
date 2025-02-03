import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./pages/Employee";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<User />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
