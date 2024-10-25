import styles from "./home.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam
        blanditiis fugiat id explicabo eveniet quam quibusdam doloribus,
        molestias aliquid similique dolor soluta quae in provident temporibus
        obcaecati! Qui, doloribus?
      </p>

      <div className={styles.row}>
        <div className={styles.col}>
          <img src="/ETH-BTC.jpg" alt="" />
        </div>
        <div className={styles.col}>
          <h3>Our Values</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis quas enim porro sint alias vel omnis laudantium in ab.
            Natus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
