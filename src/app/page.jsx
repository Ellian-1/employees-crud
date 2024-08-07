import React from "react";
import styles from "@/app/Home.module.css";
import { prisma } from "@/libs/prisma";

const Home = async () => {
  const employees = await prisma.employees.findMany();

  return (
    <div className={styles.container}>
      {employees.map((employee) => (
        <div className={styles.employeeInfo} key={employee.id}>
          <h3
            className={`${styles.employeeData} ${styles.name}`}
          >{`${employee.first_name} ${employee.last_name}:`}</h3>
          <p
            className={`${styles.employeeData} ${styles.job}`}
          >{`Started work as a ${employee.job_description} at ${new Date(
            employee.started_at
          ).toLocaleDateString()}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
