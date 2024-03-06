import { FaEllipsisVertical } from "react-icons/fa6";
import styles from "./styles.module.scss";

export default function WishlistItem({ className, wish, onChecked }) {
  const handleChecked = (e) => {
    onChecked(prevState => (
      [...prevState].map((w) => {
        if (w.id === e.target.id) {
          return {
            ...w,
            checked: !w.checked,
          }
        } else {
          return w;
        }
      })
    ));
  };

  return (
    <div className={`${className} ${styles.container}`}>
      <div>
        <input type="checkbox" id={wish.id} name={wish.name} onChange={(e) => handleChecked(e)} />
        <label htmlFor={wish.name}>{wish.name}</label>
      </div>
      <FaEllipsisVertical size={16} />
    </div>
  );
}