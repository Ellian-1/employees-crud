"use client";
import React from "react";
import styles from "./new.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [job_description, setJob_description] = useState("");

  useEffect(() => {
    fetch(`/api/employees/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setFirst_name(data.first_name);
        setLast_name(data.last_name);
        setJob_description(data.job_description);
      });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/employees", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, job_description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    router.push("/");
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
            onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}
          />
        </label>
        <label htmlFor="last_name" className={styles.label}>
          Last name:
          <input
            id="last_name"
            type="text"
            className={styles.input}
            placeholder="Last name"
            onChange={(e) => setLast_name(e.target.value)}
            value={last_name}
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
            onChange={(e) => setJob_description(e.target.value)}
            value={job_description}
          ></textarea>
        </label>
        <button className={styles.button}>Crear</button>
      </form>
    </div>
  );
};

export default NewPage;
