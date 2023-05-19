import Link from "next/link";
import styles from "../styles/nav.module.scss";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className={`${styles.nav} `}>
      <div className={`flex-row space-between gap-10`}>
        <div className={styles.logo}>
          <h2>Saqlen Mehdi</h2>
        </div>
        <ul className={`${styles.ul} flex-row space-between gap-10`}>
          <li>
            <Link href={"#"} className={"btn"}>
              <Image src={"/github.svg"} width={25} height={25} alt="Github" />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
