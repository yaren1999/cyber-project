import styles from "./style.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <img src="/logo2.svg" alt="Cyber Logo" className={styles.logo} />
        <p className={styles.description}>
          We are residential interior design firm located in Portland.
          <br />
          Our boutique-studio offers more than
        </p>
        <div className={styles.icons}>
          <FaFacebookF className={styles.icon} />
          <FaTwitter className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaLinkedinIn className={styles.icon} />
        </div>
      </div>

      <div className={styles.column}>
        <h4 className={styles.heading}>Services</h4>
        <p className={styles.link}>Bonus Program</p>
        <p className={styles.link}>Gift Cards</p>
        <p className={styles.link}>Credit and Payment</p>
        <p className={styles.link}>Services Contact</p>
        <p className={styles.link}>Non-Cash Account</p>
        <p className={styles.link}>Payment</p>
      </div>

      <div className={styles.column}>
        <h4 className={styles.heading}>Assistance to the Buyer</h4>
        <p className={styles.link}>Find and Order</p>
        <p className={styles.link}>Terms of Delivery</p>
        <p className={styles.link}>Exchange and Return of Goods</p>
        <p className={styles.link}>Guarantee</p>
        <p className={styles.link}>Frequently Asked Questions</p>
        <p className={styles.link}>Terms of Use of the Site</p>
      </div>
    </footer>
  );
};

export default Footer;
