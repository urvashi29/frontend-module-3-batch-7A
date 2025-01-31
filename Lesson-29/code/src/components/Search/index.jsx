import React from "react";

//throttle & debounce
const index = () => {
  //js
  function throttle(fn, delay) {
    let run = false;
    return (...args) => {
      if (!run) {
        fn(...args);
        run = true;
        setTimeout(() => (run = false), delay);
      }
    };
  }

  // js debounce

  // const handleChange = () => {};

  return (
    <>
      <input
        placeholder="Please enter name"
        type="text"
        onChange={throttle(handleChange, 500)}
      />
    </>
  );
};

export default index;
