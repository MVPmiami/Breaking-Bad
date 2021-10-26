import React from "react";
import styles from "./style.module.scss";

const ErrorMessage = ({ messege }) => {
  return <div className={styles.errorMessage}>{messege}</div>;
};

export default ErrorMessage;
