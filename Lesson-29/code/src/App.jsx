import React from "react";
import Memo from "./components/Memo";
import Callback from "./components/Callback";
import Search from "./components/Search";
import User from "./pages/User";
import About from "./pages/SuspenseAbout";

const App = () => {
  return (
    <>
      {/* <Memo /> */}
      {/* <Callback /> */}
      <User />
      {/* <Search /> */}
      <About />
    </>
  );
};

export default App;
