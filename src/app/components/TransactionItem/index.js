import Image from "next/image";
import { FaEllipsisVertical } from "react-icons/fa6"; 
import styles from "./styles.module.scss";

export default function TransactionItem({ className, imageSrc, name, date, amount, isDeposit }) {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.user_peer_info}>
        <div className={styles.user_pict}>
          <Image 
            src={imageSrc}
            alt={`Profile picture ${name}`}
            width={48}
            height={48}
          />
        </div>
        <div>
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className={styles.transactions_info}>
        <p>{`${isDeposit ? '+' : '-'}$${amount}`}</p>
        <FaEllipsisVertical size={22} />
      </div>
    </div>
  );
}