import styles from "../styles/footer.module.scss";
import Link from "next/link";
import { VscMail } from "react-icons/vsc";
import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={"content-wrapper"}>
      <footer className={styles.footer}>
        <div className={styles.social}>
          <Link
            href="https://www.linkedin.com/in/mehdisaqlen"
            target={"_blank"}
          >
            <FaLinkedinIn />
          </Link>
          <Link href="https://www.github.com/mehdisaqlen" target={"_blank"}>
            <FaGithub />
          </Link>
          <Link
            href="https://twitter.com/intent/follow?screen_name=mehdisaqlen"
            target={"_blank"}
          >
            <FaTwitter />
          </Link>
          <Link href="https://www.instagram.com/mehdisaqlen" target={"_blank"}>
            <FaInstagram />
          </Link>
          <Link href="https://www.medium.com/@mehdisaqlen" target={"_blank"}>
            <AiOutlineMedium />
          </Link>
          <Link href="mailto:mehdisaqlendev@gmail.com" target={"_blank"}>
            <VscMail />
          </Link>
        </div>
        <p>Saqlen Mehdi &copy; 2023</p>
      </footer>
    </div>
  );
}
