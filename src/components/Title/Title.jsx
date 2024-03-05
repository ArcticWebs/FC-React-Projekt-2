import styles from "./Title.module.scss";
import calc from "../../assets/Calculator.png";

const Title = () => {
  return (
    <div className="container">
      <div className={styles.titleBox}>
        <img src={calc} alt="" className={styles.icon} />
        <div className={styles.mainTitle}>Przelicznik walut</div>
      </div>
    </div>
  );
};

export default Title;
