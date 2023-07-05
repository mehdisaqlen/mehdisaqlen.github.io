import styles from "../styles/home.module.scss";
import Tech from "@/components/Tech";
import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { VscMail, VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn, FaFileAlt } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";

function Home() {
  return (
    <div>
      <article className={`${styles.about} content-wrapper`}>
        <h2>About Me</h2>
        <p>
          Hello, I&apos;m Saqlen Mehdi, a Software Engineering graduate with a
          strong passion for <strong>AI</strong> and{" "}
          <strong>Computer Vision</strong>. My research interests revolve around
          utilizing AI and computer vision to address healthcare challenges,
          such as early detection of brain tumors and other medical conditions.
        </p>
        <p>
          As a full-stack developer, I have a strong command of web development
          technologies. I am skilled in building interactive and responsive web
          applications using <strong>React, Next.js, Node.js,</strong> and{" "}
          <strong>Python</strong>. My proficiency in these areas allows me to
          create engaging user experiences and deliver high-quality web
          solutions.
        </p>

        <p>
          In addition to my technical skills, I possess a diverse range of soft
          skills. I am proficient in graphic designing, copywriting,
          documentation, and have experience in leading teams, project
          management, and ensuring optimal user experience.
        </p>

        <p>
          I also enjoy contributing and sharing my knowledge with others. You
          can find my articles on Medium and Wirelogs, where I cover various
          topics related to software engineering, AI, and computer vision. I
          also actively teach coding and related concepts on YouTube.
        </p>

        <p>
          If you&apos;re looking for someone to collaborate with in achieving
          your business goals or have any other inquiries, please feel free to
          reach out to me.
        </p>

        <strong>Regards,</strong>
        <p>Saqlen Raza Mehdi</p>
        <div className={styles.socialIcons}>
          <Link
            href="https://drive.google.com/file/d/1Qo7Ei7yuAs6DQuZU5PPhtDmfudhRZJ8X/view?usp=sharing"
            target={"_blank"}
            title="Resume"
          >
            <FaFileAlt />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mehdisaqlen"
            target={"_blank"}
          >
            <FaLinkedinIn />
          </Link>
          <Link href="https://www.github.com/mehdisaqlen" target={"_blank"}>
            <VscGithubAlt />
          </Link>
          <Link href="https://www.medium.com/@mehdisaqlen" target={"_blank"}>
            <AiOutlineMedium />
          </Link>
          <Link
            href="https://twitter.com/intent/follow?screen_name=mehdisaqlen"
            target={"_blank"}
          >
            <CiTwitter />
          </Link>
          <Link href="mailto:mehdisaqlendev@gmail.com">
            <VscMail />
          </Link>
        </div>
      </article>
      <Tech />
    </div>
  );
}

export default Home;
