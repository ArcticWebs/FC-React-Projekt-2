import styles from "./Input.module.scss";

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      className={styles.mainInput}
      name={name}
      type={type}
      required
      min="0.01"
      step="0.01"
      placeholder={placeholder}
    />
  );
};

export default Input;
