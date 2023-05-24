import styles from "../styles/home.module.scss";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { CiLocationOn, CiLinkedin, CiTwitter } from "react-icons/ci";
import { VscLink, VscGithubAlt } from "react-icons/vsc";
import SubNav from "./SubNav";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          }
          fill
          style={{ objectFit: "cover" }}
          alt={"Banner AI"}
        />
      </div>
      <div className={"content-wrapper"}>
        <div className={"flex-row space-between"}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/saqlen.jpg"}
              quality={100}
              width={100}
              height={100}
              alt="Saqlen Mehdi"
              className={styles.image}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <Button
              text="Follow"
              path="https://twitter.com/intent/follow?screen_name=mehdisaqlen"
              target={"_blank"}
            >
              <CiTwitter size={25} />
            </Button>
          </div>
        </div>

        <div className={styles.text}>
          <h1>Saqlen Mehdi</h1>
          <p className={styles.description}>React ⚛️ Developer</p>
          <p className={styles.description} style={{ marginTop: 5 }}>
            I am passionate about ML and 🤖 Computer Vision.
          </p>

          <div className={"flex-row flex-wrap gap-10 icon-row my-15"}>
            <div className="text-icon ">
              <CiLocationOn size={20} />
              Pakistan
            </div>

            <div className="text-icon ">
              <VscLink size={20} />{" "}
              <Link href="https://www.wirelogs.com/" rel={"dofollow"}>
                wirelogs.com
              </Link>
            </div>

            <div className="text-icon ">
              <VscGithubAlt size={20} />
              <Link href="https://www.github.com/mehdisaqlen" target={"_blank"}>
                GitHub
              </Link>
            </div>
            <div className="text-icon ">
              <CiLinkedin size={20} />
              <Link
                href="https://www.linkedin.com/in/mehdisaqlen"
                target={"_blank"}
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <SubNav />
        </div>
      </div>
    </section>
  );
}
