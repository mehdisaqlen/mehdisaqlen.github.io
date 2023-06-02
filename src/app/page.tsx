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
          Hi, I am Saqlen Mehdi a Software Engineering graduate with a strong
          passion for <strong>AI</strong> and <strong>Computer Vision.</strong>I
          have expertise in web development, machine learning, computer vision,
          and cybersecurity. With skills in{" "}
          <strong>React, Next.js, Node.js,</strong> and <strong>Python</strong>,
          I have successfully completed projects in these areas.
        </p>
        <p>
          I also love contributing and sharing my knowledge. I write articles on
          Medium and Wirelogs. I teach coding on YouTube.
        </p>

        <p>
          If you&apos;re seeking assistance in achieving your business goals, I
          am ready to collaborate. Feel free to reach out to me.
        </p>
        <p>Let me know if there&apos;s anything else I can help you with!</p>
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
