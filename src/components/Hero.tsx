import styles from "../styles/home.module.scss";
import Image from "next/image";
import TechStack from "./TechStack";
import Button from "./Button";
import Link from "next/link";
import { CiLocationOn, CiLink, CiLinkedin, CiTwitter } from "react-icons/ci";
import { VscLink, VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import SubNav from "./SubNav";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          }
          fill={true}
          style={{ objectFit: "cover" }}
          className={styles.img}
          alt={"Banner AI"}
        />
      </div>
      <div className={"content-wrapper"}>
        <div className={"flex-row space-between"}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/saqlen.jpeg"}
              quality={100}
              width={125}
              height={125}
              alt="Saqlen Mehdi"
              className={styles.image}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <Button text="Follow" path="#">
              <CiTwitter size={25} />
            </Button>
          </div>
        </div>

        <div className={styles.text}>
          <h1 className={styles.title}>Saqlen Mehdi</h1>
          <p className={styles.description}>React ⚛️ Developer</p>
          <p className={styles.description} style={{ marginTop: 5 }}>
            I am passionate about ML and 🤖 Computer Vision.
          </p>

          <div className={"flex-row  gap-10 icon-row my-15"}>
            <div className="text-icon ">
              <CiLocationOn size={20} />
              Pakistan
            </div>

            <div className="text-icon ">
              <VscLink size={20} /> <Link href="#">Wirelogs.com</Link>
            </div>

            <div className="text-icon ">
              <VscGithubAlt size={20} />
              <Link href="#">GitHub</Link>
            </div>
            <div className="text-icon ">
              <CiLinkedin size={20} />
              <Link href="#">LinkedIn</Link>
            </div>
          </div>
          {/* <div className={"flex-row gap-10 my-20"}>
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
          </div> */}
          <SubNav />
        </div>
      </div>
    </section>
  );
}
