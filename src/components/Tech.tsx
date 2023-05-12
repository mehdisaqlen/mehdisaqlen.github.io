import styles from "../styles/home.module.scss";
import TechStack from "./TechStack";

export default function Tech() {
  return (
    <section
      className={`${styles.container} `}
      style={{ background: "#ececec" }}
    >
      <section className={"content-wrapper"}>
        <div className={styles.techWrapper}>
          <div className={styles.text}>
            <h2 className={styles.subtitle}>My Stack</h2>
            <p>Modern Cutting-Edge Technologies</p>
          </div>
          <TechStack />
        </div>
      </section>
    </section>
  );
}
