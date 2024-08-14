import React from "react";
import styles from "@/app/NotFound.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.container}>
        <h1 className={styles.header}>Not Found</h1>
        <Link href="/" className={styles.homeLink}>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
