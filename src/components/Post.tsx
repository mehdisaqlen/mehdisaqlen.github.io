import styles from "../styles/post.module.scss";
import Image from "next/image";
import Link from "next/link";
import { VscCalendar } from "react-icons/vsc";

interface post {
  title: string;
  date: string;
  desc: string;
  img: string;
  url: string;
  tag: string;
}

export default function Post(props: post) {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.postInfo}>
          <Image
            src="/saqlen.jpg"
            width={55}
            height={55}
            className={styles.avatar}
            alt={"Saqlen Mehdi"}
          />

          <Link href={"/"} className={styles.name}>
            Saqlen
          </Link>
          <p className={"text-icon date"}>
            <VscCalendar /> &nbsp; {props.date}
          </p>
        </div>
        <div className={styles.tag}>
          <p>{props.tag}</p>
        </div>
      </header>

      <div className={styles.body}>
        <Link href={props.url}>
          <h2>{props.title}</h2>
        </Link>
        <p>{props.desc}</p>
      </div>
      <Link href={props.url}>
        <div className={styles.thumbnail}>
          <Image
            src={props.img}
            alt={props.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
    </div>
  );
}
