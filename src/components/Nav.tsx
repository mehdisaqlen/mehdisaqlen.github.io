import Link from "next/link";
import styles from "../styles/nav.module.scss";

export default function Nav() {
  return (
    <nav className={`${styles.nav} `}>
      <div className={`content-wrapper flex-row space-between gap-10`}>
        <div className={styles.logo}>
          <h2>
            <span className={"thin-text"}>SAQLEN</span> MEHDI
          </h2>
        </div>
        <ul className={`${styles.ul} flex-row space-between gap-10`}>
          <li>
            <Link href="#" className={"px-10 "}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#" className={"px-10 "}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#" className={"px-15 "}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
