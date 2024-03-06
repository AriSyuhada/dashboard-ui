"use client";
import styles from "./styles.module.scss";
import person1Pic from "../../assets/person-images/Person-4.png"
import person2Pic from "../../assets/person-images/Person-6.png"
import person3Pic from "../../assets/person-images/Person-7.png"
import person4Pic from "../../assets/person-images/Person-5.png"
import TransactionItem from "../TransactionItem";
import { useState } from "react";

const TRANSACTIONS = [
  {
    id: 'transactions-1',
    imageSrc: person1Pic,
    name: 'Bessie Cooper',
    date: '02 July 2023',
    amount: 3000,
    isDeposit: false,
  },
  {
    id: 'transactions-2',
    imageSrc: person2Pic,
    name: 'Guy Hawkins',
    date: '02 July 2023',
    amount: 1970,
    isDeposit: true,
  },
  {
    id: 'transactions-3',
    imageSrc: person3Pic,
    name: 'Floyd Miles',
    date: '02 July 2023',
    amount: 5000,
    isDeposit: false,
  },
  {
    id: 'transactions-4',
    imageSrc: person4Pic,
    name: 'Esther Howard',
    date: '02 July 2023',
    amount: 2450,
    isDeposit: true,
  },
];

export default function TransactionsCard({ className }) {
  const [filterNewest, setFilterNewest] = useState(true);

  const handleChangeFilter = (isNewest) => {
    setFilterNewest(isNewest);
  } 

  return(
    <div className={`${className} ${styles.container}`}>
      <div className={`${styles.header}`}>
        <h3>Last Transactions</h3>
        <div>
          <button className={`${styles.filter_button} ${filterNewest ? styles.active_filter : ''}`} onClick={() => handleChangeFilter(true)}>Newest</button>
          <button className={`${styles.filter_button} ${!filterNewest ? styles.active_filter : ''}`} onClick={() => handleChangeFilter(false)}>Oldest</button>
        </div>
      </div>
      <div className={`${styles.transactions_wrapper}`}>
        {
          TRANSACTIONS.map((t) => (
            <TransactionItem 
              key={t.id}
              imageSrc={t.imageSrc} 
              name={t.name}
              date={t.date}
              amount={t.amount}
              isDeposit={t.isDeposit}
            />
          ))
        }
      </div>
    </div>
  );
}