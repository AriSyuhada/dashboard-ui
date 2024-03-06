import { FaEllipsisVertical } from "react-icons/fa6";
import styles from "./styles.module.scss";
import PieChart from "../PieChart";

export default function AnalyticsToDoCard({ className }) {
  return (
    <div className={`${className} ${styles.container}`}>
      <div>
        <h3>Analytics</h3>
        <button>
          <FaEllipsisVertical size={22} />
        </button>
      </div>
      <PieChart width={350} height={175} />
    </div>
  );
}