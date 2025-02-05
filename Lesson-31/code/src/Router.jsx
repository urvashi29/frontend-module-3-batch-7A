import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import CounterTwo from "./pages/CounterTwo";
import User from "./pages/User";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/users" element={<User />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/countertwo" element={<CounterTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
