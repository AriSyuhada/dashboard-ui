import Image from "next/image";
import { FaCcVisa } from "react-icons/fa6";
import styles from "./styles.module.scss";
import illustrationPic from "../../assets/illustration/Money.png";

export default function CreditCard({ className }) {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.header}>
        <h3>S.</h3>
        <FaCcVisa size={36} />
      </div>
      <Image 
        src={illustrationPic}
        alt="Visa Card Illustration"
        height={229}
        width={250}
        className={styles.illustration}
      />
      <div className={styles.footer}>
        <div>
          <h4>***** 9838</h4>
          <p>Jhon Doe</p>
        </div>
        <p>08/12</p>
      </div>
    </div>
  );
}