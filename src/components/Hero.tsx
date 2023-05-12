import styles from "../styles/home.module.scss";
import Image from "next/image";
import TechStack from "./TechStack";
import Link from "next/link";
export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={"flex-row gap-20 space-between content-wrapper"}>
        <div className={styles.text}>
          <h1 className={styles.title}>Full Stack React Developer</h1>
          <p className={styles.description}>
            Hi 👋, I am Saqlen Mehdi. Passionate Full-stack React developer
            based in{" "}
            <Image
              className={"align-center"}
              src={"/pak.svg"}
              width={25}
              height={25}
              alt="Pakistan"
            />{" "}
            Pakistan .
          </p>
          <div className={"flex-row gap-10 my-20"}>
            <Link href={"#"} className={"btn"}>
              <Image
                src={"/linkedin.svg"}
                width={35}
                height={35}
                alt="LinkedIn"
              />{" "}
            </Link>
            <Link href={"#"} className={"btn"}>
              <Image src={"/github.svg"} width={30} height={30} alt="Github" />{" "}
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={"/photo.jpg"}
            width={400}
            height={420}
            alt="Image"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
