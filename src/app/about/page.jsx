import React from "react";
import styles from "@/app/about/About.module.css";

const AboutPage = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.header}>About</h3>
      <p className={styles.paragraph}>
        Web application for the registration of employees, using their first
        name, last name and job description.
      </p>
    </section>
  );
};

export default AboutPage;
