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
          I am a React Developer with expertise in Next.js, API development, Firebase, MongoDB, and Docker for streamlined app development and deployment. Over the past two years, I've been at the forefront of the AI revolution, specializing in Computer Vision and AI research. Currently, I'm a Software Developer at ASPIRE Pakistan and a contributing researcher at the National AI Think Tank Program.
        </p>
        <p>
        I&apos;m passionate about building innovative computer vision applications and diving deep into deep learning. My recent project, a “Facial Emotions Recognition System” built with OpenCV and Keras that achieved an accuracy rate of 94%, showcases my ability to turn knowledge into practical solutions.
        </p>

        <p>
        Rather than spreading myself thin across multiple technologies, I focus on mastering the tools that enable me to solve real-world problems. I'm a project-driven learner, having taught myself web and desktop app development, as well as technologies like Tensorflow, Keras, and OpenCV.
        </p>

        <p>
        I&apos;m also an avid blogger, sharing my knowledge and insights with the community.
        </p>

   

        <strong>Warm Regards,</strong>
        <p>Saqlen Raza Mehdi</p>
        <div className={styles.socialIcons}>
          <Link
            href="https://drive.google.com/file/d/1JviwuKdfFyTQtSq4suMylMEtiEPZBkbM/view?usp=sharing"
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
