import styles from "../styles/home.module.scss";
import Tech from "@/components/Tech";
function Home() {
  return (
    <div>
      <article className={`${styles.about} content-wrapper`}>
        <h2>About Me</h2>
        <p>
          Hello 👋, I'm Saqlen Mehdi, a Software Engineering graduate with a
          profound passion for cutting-edge technologies and their applications.
          My expertise spans across various domains, including web development,
          machine learning, computer vision, and cybersecurity.
        </p>
        <p>
          As a versatile full-stack developer, I possess exceptional
          problem-solving abilities. I have honed my skills in React, Next.js,
          Node.js, and Python, having successfully executed several projects
          utilizing these technologies. Notable among them are Wirelogs and
          EarningsIdeas, which showcase my proficiency in crafting robust
          solutions. Additionally, I have a keen interest in writing and
          teaching, enabling me to share my knowledge with others. I actively
          contribute to the programming community by teaching at a local
          academy.
        </p>
        <p>
          My unwavering passion for the transformative power of Information
          Technology (IT) motivates me to be at the forefront of the field. I
          aspire to make significant contributions and help organizations scale
          and thrive in this rapidly evolving landscape.
        </p>

        <p>
          If you're seeking assistance in achieving your business goals, I am
          ready to collaborate. Feel free to reach out to me at
          "mehdisaqlendev@gmail.com."
        </p>
        <p>Let me know if there's anything else I can help you with!</p>
        <strong>Regards,</strong>
        <p>Saqlen Raza Mehdi</p>
      </article>
      <Tech />
    </div>
  );
}

export default Home;
