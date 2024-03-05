import { useState } from "react";
import styles from "./Counter.module.scss";
import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";

import clsx from "clsx";

const Counter = () => {
  const url = "https://api.nbp.pl/api/exchangerates/rates/a/";

  const [plnAmount, setPlnAmount] = useState("");

  const recalcForm = (e) => {
    e.preventDefault();

    const { amount, choosenCurrency } = e.currentTarget.elements;

    fetch(url + choosenCurrency.value)
      .then((response) => response.json())
      .then((data) => {
        setPlnAmount((state) => amount.value * data.rates[0].mid);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={clsx(styles.currencyCounter, "container")}>
      <div className={styles.currencyCounterBox}>
        <form className={styles.inputBox} onSubmit={recalcForm}>
          <Input type="text" placeholder="Kwota" name="amount" />
          <Select name="choosenCurrency" />
          <Button type="submit" label="PRZELICZ" />
        </form>
        <div className={styles.plnSum}>
          To:
          <span className={styles.plnSumNumber}>
            {plnAmount ? plnAmount.toFixed(2) : "0,00"} PLN
          </span>
        </div>
      </div>
    </div>
  );
};
export default Counter;
