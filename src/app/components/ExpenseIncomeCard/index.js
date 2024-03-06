import styles from "./styles.module.scss";

export default function ExpenseIncomeCard({ className, expenseAmount, incomeAmount }) {
  const totalAmount = expenseAmount + incomeAmount;
  const expensePercentage = (expenseAmount / totalAmount) * 100;
  const incomePercentage = (incomeAmount / totalAmount) * 100;

  return(
    <div className={`${className} ${styles.container}`}>
      <h3>Expenses and Incomes</h3>
      <div className={styles.comparison}>
        <div className={styles.expense}>
          <p className={styles.label}>Expense</p>
          <p className={styles.percentage}>{Number.parseFloat(expensePercentage).toFixed(2)}%</p>
          <p className={styles.amount}>${expenseAmount}</p>
        </div>
        <div className={styles.versus}>
          <div></div>
          <p>VS</p>
          <div></div>
        </div>
        <div className={styles.income}>
          <p className={styles.label}>Income</p>
          <div className={styles.percentage}>{Number.parseFloat(incomePercentage).toFixed(2)}%</div>
          <div className={styles.amount}>${incomeAmount}</div>
        </div>
      </div>
      <div className={styles.bar_wrapper}>
        <div className={`${styles.bar} ${styles.expense_bar}`} style={{ width: `calc(${expensePercentage}% - 0.3rem)` }}></div>
        <div className={`${styles.bar} ${styles.income_bar}`} style={{ width: `calc(${incomePercentage}% - 0.3rem)` }}></div>
      </div>
    </div>
  );
}