import Image from "next/image";
import styles from "./styles.module.scss";
import senderPic from "../../assets/person-images/Person-3.png";
import receiverPic from "../../assets/person-images/Person-5.png";

export default function ChatCloud({ className, message, isSender }) {
  return (
    <div className={`${className} ${styles.container} ${isSender ? styles.sender_cloud : styles.receiver_cloud}`}>
      <div className={`${styles.picture_wrapper}`}>
        <Image 
          className={`${isSender ? styles.sender_picture : styles.receiver_picture}`}
          src={isSender ? senderPic : receiverPic}
          alt={isSender ? "Sender Picture" : "Receiver Picture"}
          width={48}
          height={48}
        />
      </div>
      <p className={`${styles.message} ${isSender ? styles.sender_message : styles.receiver_message}`}>{message}</p>
    </div>
  );
}