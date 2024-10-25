import React, { useState } from "react";
import styles from "../../pages/blogs/blogs.module.css";

const Toggler = ({ isActive, setIsActive, setSelectedCategory }) => {
  const [showCat, setShowCat] = useState(false);

  return (
    <>
      <div
        className={
          showCat
            ? `${styles.categoryToggler} ${styles.active}`
            : `${styles.categoryToggler}`
        }
      >
        <span
          onClick={() => {
            setIsActive("all");
            setSelectedCategory("All");
            setShowCat(false);
          }}
          className={isActive === "all" ? `${styles.active}` : ""}
        >
          All Blog
        </span>
        <span
          onClick={() => {
            setIsActive("sport");
            setSelectedCategory("Sport");
            setShowCat(false);
          }}
          className={isActive === "sport" ? `${styles.active}` : ""}
        >
          Sport
        </span>

        <span
          onClick={() => {
            setIsActive("education");
            setSelectedCategory("Education");
            setShowCat(false);
          }}
          className={isActive === "education" ? `${styles.active}` : ""}
        >
          Education
        </span>

        <span
          onClick={() => {
            setIsActive("religion");
            setSelectedCategory("Religion");
            setShowCat(false);
          }}
          className={isActive === "religion" ? `${styles.active}` : ""}
        >
          Religion
        </span>
        <span
          onClick={() => {
            setIsActive("science");
            setSelectedCategory("Science");
            setShowCat(false);
          }}
          className={isActive === "science" ? `${styles.active}` : ""}
        >
          SCience
        </span>
        <span
          onClick={() => {
            setIsActive("politics");
            setSelectedCategory("Politics");
            setShowCat(false);
          }}
          className={isActive === "politics" ? `${styles.active}` : ""}
        >
          Politics
        </span>
        <span
          onClick={() => {
            setIsActive("health");
            setSelectedCategory("Health");
            setShowCat(false);
          }}
          className={isActive === "health" ? `${styles.active}` : ""}
        >
          Health
        </span>
        <span
          onClick={() => {
            setIsActive("entertainment");
            setSelectedCategory("Entertainment");
            setShowCat(false);
          }}
          className={isActive === "entertainment" ? `${styles.active}` : ""}
        >
          Entertainment
        </span>
      </div>

      <div className={styles.toggleMenu} onClick={() => setShowCat(true)}>
        <h4>Categories</h4>
      </div>
    </>
  );
};

export default Toggler;
