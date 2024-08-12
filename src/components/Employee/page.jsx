"use client";
import React from "react";
import styles from "../Employee/Employee.module.css";
import { useRouter } from "next/navigation";

const Employee = ({ employee }) => {
  const router = useRouter();
  return (
    <div
      className={styles.employeeInfo}
      key={employee.id}
      onClick={() => {
        router.push(`/employees/edit/${employee.id}`);
      }}
    >
      <h3
        className={`${styles.employeeData} ${styles.name}`}
      >{`${employee.first_name} ${employee.last_name}:`}</h3>
      <p
        className={`${styles.employeeData} ${styles.job}`}
      >{`Started work as a ${employee.job_description} at ${new Date(
        employee.started_at
      ).toLocaleDateString()}`}</p>
    </div>
  );
};

export default Employee;
