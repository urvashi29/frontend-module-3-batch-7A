import React from "react";
import styles from "@/styles/User.module.css";
import Button from "@/components/Button";

const User = () => {
  
  return (
    <>
      <p className={styles.text}>Almabetter</p>
      <div className={styles.container}>lorem ipsum</div>
      <Button>Explore courses</Button>
    </>
  );
};

export default User;
