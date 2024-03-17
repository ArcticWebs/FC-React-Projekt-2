import { useState } from "react";
import styles from "./Counter.module.scss";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

import clsx from "clsx";

const Counter = () => {
  const url = "https://api.nbp.pl/api/exchangerates/rates/a/";

  const [plnAmount, setPlnAmount] = useState("");
  const [error, setError] = useState(null);

  const recalcForm = (e) => {
    e.preventDefault();
    setError("");

    const { amount, choosenCurrency } = e.currentTarget.elements;

    fetch(url + choosenCurrency.value)
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.rates || !data.rates[0] || !data.rates[0].mid) {
          setError(
            "Niestety, coś poszło nie tak. Sprawdź połączenie z Internetem lub spróbuj później."
          );
        }
        setPlnAmount((state) => amount.value * data.rates[0].mid);
      })
      .catch((err) => {
        setError(
          "Niestety, coś poszło nie tak. Sprawdź połączenie z Internetem lub spróbuj później."
        );
      });
  };

  return (
    <div className={clsx(styles.currencyCounter, "container")}>
      <div className={styles.currencyCounterBox}>
        <form className={styles.inputBox} onSubmit={recalcForm}>
          <Input placeholder="Kwota" name="amount" />
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
      {error && <span className={styles.alert}>{error}</span>}
    </div>
  );
};
export default Counter;
