import styles from "../styles/post.module.scss";
import Image from "next/image";
import Link from "next/link";
import { VscCalendar } from "react-icons/vsc";
export default function Post() {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.postInfo}>
          <Image
            src="/saqlen.jpeg"
            width={55}
            height={55}
            className={styles.avatar}
            alt={"Saqlen Mehdi"}
          />

          <Link href={"#"} className={styles.name}>
            Name
          </Link>
          <p className={"text-icon date"}>
            <VscCalendar /> &nbsp; April 2022
          </p>
        </div>
        <div className={styles.tag}>
          <p>CSS</p>
        </div>
      </header>

      <div className={styles.body}>
        <h2>How computer vision can change the world?</h2>
        <p>
          Computer vision is an AI subset. Teaching computers how to see the
          image
        </p>
      </div>

      <div className={styles.thumbnail}>
        <Image
          src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a"
          alt={"Saqlen Mehdi"}
          fill
        />
      </div>
    </div>
  );
}
