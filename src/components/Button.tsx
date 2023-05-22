import styles from "../styles/button.module.scss";
import Link from "next/link";

interface ButtonProps {
  text: string;
  path: string;
  children: any;
  target: string;
}
export default function Button(props: ButtonProps) {
  return (
    <Link href={props.path} className={styles.button} target={props.target}>
      {props.text}
      {props.children}
    </Link>
  );
}
