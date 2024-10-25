import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Welcome To My Blog Post</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex
        iste cum necessitatibus voluptas esse laborum incidunt minima, quia
        quidem. Error quam dolorem similique ratione consequuntur eius ex
        aliquid temporibus.
      </p>
      <Link to="#about">More About Us</Link>
    </div>
  );
};

export default Hero;
