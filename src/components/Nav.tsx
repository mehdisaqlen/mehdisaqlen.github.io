import Link from "next/link";
import styles from "../styles/nav.module.scss";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className={`${styles.nav} `}>
      <div className={"content-wrapper"}>
        <div className={`flex-row space-between gap-10`}>
          <div className={styles.logo}>
            <Link href="/">
              <h2>Saqlen Mehdi</h2>
            </Link>
          </div>
          <ul className={`${styles.ul} flex-row space-between gap-10`}>
            <li>
              <Link
                href={"https://www.github.com/mehdisaqlen"}
                className={"btn"}
                target={"_blank"}
              >
                <Image
                  src={"/github.svg"}
                  width={25}
                  height={25}
                  alt="Github"
                />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
