import styles from "../styles/button.module.scss";
import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { Children } from "react";
interface ButtonProps {
  text: string;
  path: string;
  children: any;
}
export default function Button(props: ButtonProps) {
  return (
    <Link href={props.path} className={styles.button}>
      {props.text}
      {props.children}
    </Link>
  );
}
