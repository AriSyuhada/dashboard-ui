import styles from "./styles.module.scss";

export default function Button({ className, large=false, regular=true, small=false, placeholder }) {
  return (
    <button className={`${className} ${styles.container} ${large ? styles.large : ''} ${regular ? styles.regular : ''} ${small ? styles.small : ''}`}>
      {placeholder}
    </button>
  );
}