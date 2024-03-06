"use client";
import { FaChevronRight, FaPlus } from "react-icons/fa6";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import WishlistItem from "../WishlistItem";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

export default function WishlishtCard({ className }) {
  const [checkedWishlist, setCheckedWishlist] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  const currentDate = new Date();
  const currentDay = DAYS[currentDate.getDay()];
  const currentMonth = MONTHS[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const futureDate = new Date();
  futureDate.setMonth(currentDate.getMonth() + 3);
  futureDate.setDate(currentDate.getDate() + 2);
  const futureDay = DAYS[futureDate.getDay()];
  const futureMonth = MONTHS[futureDate.getMonth()];
  const futureYear = futureDate.getFullYear();

  useEffect(() => {
    setWishlist([
      ...wishlist,
      {
        id: 'wish-1',
        name: 'Macbook',
        checked: false,
      },
      {
        id: 'wish-2',
        name: 'Bicycle',
        checked: false,
      },
      {
        id: 'wish-3',
        name: 'Motorcycle',
        checked: false,
      },
      {
        id: 'wish-4',
        name: 'Iphone 14 Pro Max',
        checked: false,
      },
    ]);
  }, [])

  useEffect(() => {
    setCheckedWishlist(
      wishlist.reduce((total, current) => total += current.checked ? 1 : 0, 0)
    );
  }, [wishlist, setWishlist])

  return (
    <div className={`${className} ${styles.container}`}>
      <h3>List of items to Buy</h3>
      <div className={styles.time_frame}>
        <div className={styles.time_details}>
          <p>02:00</p>
          <p>{`${currentDay.slice(0, 3)}, ${currentMonth} ${currentYear}`}</p>
        </div>
        <FaChevronRight size={24} />
        <div className={styles.time_details}>
          <p>05:00</p>
          <p>{`${futureDay.slice(0, 3)}, ${futureMonth} ${futureYear}`}</p>
        </div>
      </div>
      <div className={styles.wishlist_info}>
        <p><span>{checkedWishlist}/{wishlist.length}</span> Shopping List</p>
        <button><span><FaPlus size={13} /></span> Add an item</button>
      </div>
      <div className={styles.wishlist}>
        {
          wishlist.map((w, i) => (
            <WishlistItem 
              className={styles.wishlist_item}
              key={`wish-${i}`}
              wish={w}
              onChecked={setWishlist}
            />
          ))
        }
      </div>
    </div>
  );
}