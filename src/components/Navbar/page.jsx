import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.textLogo}>Employees CRUD</h1>

      <ul className={styles.navLinks}>
        <li className={styles.linkItem}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="#" className={styles.link}>
            About
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="#" className={styles.link}>
            New
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
