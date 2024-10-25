import styles from "./details.module.css";
import Male from "/male.jpeg";
import Female from "/female.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import { blogsData } from "../../utils/data";
import DateObject from "react-date-object";

const Details = () => {
  const nav = useNavigate();
  const { id } = useParams();
  let date = new DateObject();

  const blog = blogsData.find((blog) => blog.id === parseInt(id));

  return (
    <div className={styles.blogBody}>
      <div className={styles.hero}>
        <div className={styles.back} onClick={() => nav(-1)}>
          <img src="/back.png" alt="" />
        </div>
        <h1>{blog.title}</h1>

        <div className={styles.wrapper}>
          <img src={blog.image} alt="background" />
        </div>
      </div>

      <div className={styles.blogContent}>
        <div className={styles.intro}>
          <div className={styles.author}>
            <div className={styles.userAvatar}>
              {blog.gender === "male" ? (
                <img src={Male} alt="" />
              ) : (
                <img src={Female} alt="" />
              )}
            </div>

            <h4>Author: {blog.author}</h4>
          </div>

          <p>
            <b>Category:</b>
            {blog.category}
          </p>
        </div>

        <div className={styles.blogText}>
          <p>{blog.body}</p>
        </div>

        <button onClick={() => nav(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default Details;
