import { FaEllipsisVertical, FaArrowRightLong } from "react-icons/fa6";
import styles from "./styles.module.scss";
import spendingPic1 from "../../assets/illustration/Shopping-Cart.png";
import spendingPic2 from "../../assets/illustration/Hospital.png";
import spendingPic3 from "../../assets/illustration/Boarding-Ticket.png";
import Image from "next/image";

const SPENDING = [
  {
    id: 'spending-1',
    pictSrc: spendingPic1,
    name: 'Online store',
    date: 'May 30, 2024 at 08:00 pm',
  },
  {
    id: 'spending-2',
    pictSrc: spendingPic2,
    name: 'Pay the hospital',
    date: 'May 28, 2024 at 10:00 pm',
  },
  {
    id: 'spending-3',
    pictSrc: spendingPic3,
    name: 'Tickets',
    date: 'May 10, 2024 at 12:00 pm',
  },
];

export default function SpendingInfoCard({ className }) {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.header}>
        <h3>Latest Spending</h3>
        <FaEllipsisVertical size={22} />
      </div>
      <div className={styles.content}>
        {
          SPENDING.map((s) => (
            <div key={s.id} className={styles.spending_item}>
              <div className={styles.illustration_wrapper}>
                <Image 
                  src={s.pictSrc}
                  alt={`${s.name} picture`}
                  width={48}
                  height={48}
                />
              </div>
              <div className={styles.spending_info}>
                <p>{s.name}</p>
                <p>{s.date}</p>
              </div>
            </div>
          ))
        }
      </div>
      <button className={styles.more_button}>View all <FaArrowRightLong size={22}/></button>
    </div>
  );
}