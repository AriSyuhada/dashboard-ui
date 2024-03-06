import Image from "next/image";
import styles from "./styles.module.scss";
import illustrationPic from "../../assets/illustration/Crown.png";
import Button from "../Button";

export default function PremiumOfferCard({ className }) {
  return (
    <div className={`${className} ${styles.container}`}>
      <p className={styles.title}>Go to premium</p>
      <Image 
        src={illustrationPic}
        alt="Premium picture illustration"
        height={96}
      />
      <h3>Need more features?</h3>
      <p className={styles.details}>Update your account to premium to get more features</p>
      <Button placeholder="Get now" large />
    </div>
  );
}