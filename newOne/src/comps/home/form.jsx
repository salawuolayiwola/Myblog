import styles from "./home.module.css";

const Form = () => {
  return (
    <div className={styles.formSection}>
      <form className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="phone">number</label>
          <input type="tel" name="phone" />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="message">Message</label>
          <input type="text" name="message" />
        </div>
        <button className={styles.btn}>Send Message</button>
      </form>
    </div>
  );
};

export default Form;
