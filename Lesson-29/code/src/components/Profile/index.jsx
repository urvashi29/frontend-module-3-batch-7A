import React, { useEffect } from "react";

const index = () => {
  
  useEffect(() => {
    const data = new Promise((res, rej) => {
      setTimeout(() => {
        res(20);
      });
    });
    data.then((r) => {
      console.log(r);
    });
  }, []);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default index;
