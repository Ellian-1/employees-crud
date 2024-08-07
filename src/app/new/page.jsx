"use client";
import React from "react";
import styles from "./new.module.css";

const NewPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const job_description = e.target.job_description.value;

    const res = await fetch("/api/employees", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, job_description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="first_name" className={styles.label}>
          First name:
          <input
            id="first_name"
            type="text"
            className={styles.input}
            placeholder="First name"
          />
        </label>
        <label htmlFor="last_name" className={styles.label}>
          Last name:
          <input
            id="last_name"
            type="text"
            className={styles.input}
            placeholder="Last name"
          />
        </label>
        <label htmlFor="job_description" className={styles.label}>
          Job description:
          <textarea
            name="job_description"
            id="job_description"
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
