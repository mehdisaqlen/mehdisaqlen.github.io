import styles from "../styles/project.module.scss";
import Image from "next/image";
import Link from "next/link";

interface project {
  title: string;
  desc: string;
  img: string;
  url: string;
}
// props: project
export default function Project(props: project) {
  return (
    <div className={styles.project}>
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
