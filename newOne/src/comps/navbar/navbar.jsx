import { useState } from "react";
import styles from "../navbar/navbar.module.css";
import { Link } from "react-router-dom";

// components

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="" />
        </div>

        <nav
          className={
            isMobile ? `${styles.nav} ${styles.active}` : `${styles.nav}`
          }
          onClick={toggleMenu}
        >
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about_us">About</Link>
        </nav>
        <div className={styles.menu} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
