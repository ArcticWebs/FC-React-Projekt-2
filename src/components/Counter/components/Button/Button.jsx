import styles from "./Button.module.scss";

const Button = ({ type, label }) => {
  return (
    <button type={type} className={styles.counterButton}>
      {label}
    </button>
  );
};

export default Button;
