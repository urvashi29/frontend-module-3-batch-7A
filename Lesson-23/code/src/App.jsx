import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeid" element={<RecipeDetails />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
