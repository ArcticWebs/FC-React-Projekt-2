import styles from "./Title.module.scss";
import calc from "../assets/Calculator.png";
import clsx from "clsx";

const Title = () => {
  return (
    <div className={clsx("container", styles.titleBox)}>
      <img src={calc} alt="" className={styles.icon} />
      <div className={styles.mainTitle}>Przelicznik walut</div>
    </div>
  );
};

export default Title;
