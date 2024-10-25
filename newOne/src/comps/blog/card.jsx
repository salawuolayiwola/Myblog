import React from "react";
import styles from "./blog.module.css";
import Male from "/male.jpeg";
import Female from "/female.jpeg";
import DateObject from "react-date-object";

import { useNavigate, useParams, Link } from "react-router-dom";

const Card = ({ blog }) => {
  const { id } = useParams();
  let date = new DateObject();

  const shortTitle =
    blog.title.length > 25 ? `${blog.title.slice(0, 25)}...` : blog.title;

  const shortBody =
    blog.body.length > 100 ? `${blog.body.slice(0, 100)}...` : blog.body;

  return (
    <Link to={`/blog/details/${blog.id}`}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={blog.image} alt="" />
        </div>
        <div className={styles.bottom}>
          <h3>{shortTitle}</h3>
          <p>{shortBody}</p>
          <div className={styles.author}>
            <div className={styles.userAvatar}>
              {blog.gender === "male" ? (
                <img src={Male} alt="" />
              ) : (
                <img src={Female} alt="" />
              )}
            </div>
            <div className={styles.userName}>
              <p>{blog.author}</p>
              <span>{date.format()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
