import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./page.module.scss";
import BalanceStatsCard from "./components/BalanceStatsCard";
import CreditCard from "./components/CreditCard";
import WishlishtCard from "./components/WishlistCard";
import ChatCard from "./components/ChatCard";
import AnalyticsToDoCard from "./components/AnalyticsToDoCard";
import TransactionsCard from "./components/TransactionsCard";
import ExpenseIncomeCard from "./components/ExpenseIncomeCard";
import SpendingInfoCard from "./components/SpendingInfoCard";
import PremiumOfferCard from "./components/PremiumOfferCard";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.main_section}>
        <div className={styles.header}>
          <div>
            <h2>Hello, John Doe</h2>
            <h3>View and control your finances here!</h3>
          </div>
          <button className={styles.search_icon}>
            <FaMagnifyingGlass size={22} />
          </button>
        </div>
        <div className={styles.content_wrapper}>
          <BalanceStatsCard />
          <CreditCard />
          <WishlishtCard />
          <ChatCard />
          <TransactionsCard />
          <AnalyticsToDoCard />
        </div>
      </div>
      <div className={styles.side_section}>
        <ExpenseIncomeCard expenseAmount={5653} incomeAmount={2656} />
        <SpendingInfoCard />
        <PremiumOfferCard />
      </div>
    </main>
  );
}
