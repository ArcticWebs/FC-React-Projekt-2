import styles from "./Select.module.scss";
import { currencies } from "../../../data/currencies";
import { nanoid } from "nanoid";

const Select = ({ name }) => {
  return (
    <select className={styles.currencySelect} required name={name}>
      {currencies.map((currency) => (
        <option key={nanoid()}>{currency.code}</option>
      ))}
    </select>
  );
};

export default Select;
