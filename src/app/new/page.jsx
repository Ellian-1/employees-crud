import React from "react";
import styles from "./new.module.css";

const NewPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label htmlFor="firstName" className={styles.label}>
          First name:
          <input
            id="firstName"
            type="text"
            className={styles.input}
            placeholder="First name"
          />
        </label>
        <label htmlFor="lastName" className={styles.label}>
          Last name:
          <input
            id="lastName"
            type="text"
            className={styles.input}
            placeholder="Last name"
          />
        </label>
        <label htmlFor="jobDescription" className={styles.label}>
          Job description:
          <textarea
            name="jobDescription"
            id="jobDescription"
            rows="3"
            className={styles.input}
            placeholder="Job description"
          ></textarea>
        </label>
        <button className={styles.button}>Crear</button>
      </form>
    </div>
  );
};

export default NewPage;
