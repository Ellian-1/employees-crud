import React from "react";
import styles from "@/app/Home.module.css";
import { prisma } from "@/libs/prisma";
import Employee from "@/components/Employee/page";

const Home = async () => {
  const employees = await prisma.employees.findMany();

  return (
    <div className={styles.container}>
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} styles={styles} />
      ))}
    </div>
  );
};

export default Home;
