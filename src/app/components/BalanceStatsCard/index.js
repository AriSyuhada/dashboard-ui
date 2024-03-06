import {
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";
import styles from "./styles.module.scss";
import BarChart from "../BarChart";

export default function BalanceStatsCard({ className, balance = 564 }) {
  let isIncrease = Math.random() < 0.5 ? false : true;

  return (
    <div className={`${className} ${styles.container}`} >
      <div className={styles.header}>
        <h3>Balance Statistics</h3>
        <div>
          <select defaultValue="" name="filters" id="balance-stats">
            <option value="" disabled>Filters</option>
            <option value="annually">Annually</option>
            <option value="monthly">Monthy</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.overview}>
          <div>
            <h4>{`$${balance}`}</h4>
            <p>Your total<br></br>balance</p>
          </div>
          {
            isIncrease
            ?
              <div className={`${styles.trend} ${styles.trend_up}`}>
                <FaArrowTrendUp size={22} />
                <p>6%</p>
              </div>
            :
              <div className={`${styles.trend} ${styles.trend_down}`}>
                <FaArrowTrendDown size={22} />
                <p>6%</p>
              </div>
          }
        </div>
        <BarChart width={325} height={175} />
      </div>
    </div>
  );
}