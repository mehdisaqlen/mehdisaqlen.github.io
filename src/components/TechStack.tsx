import Image from "next/image";
import styles from "../styles/home.module.scss";

export default function TechStack() {
  const techs = [
    { img: "/tech/nextjs.svg", alt: "Next.JS" },
    { img: "/tech/reactjs.svg", alt: "React.JS" },
    { img: "/tech/nodejs.svg", alt: "Node.JS" },
    { img: "/tech/mongodb.svg", alt: "MongoDB" },
    { img: "/tech/typescript.svg", alt: "TypeScript" },
    { img: "/tech/scss.svg", alt: "SCSS" },
    { img: "/tech/pytorch.svg", alt: "Pytorch" },
    { img: "/tech/tensorflow.svg", alt: "Tensorflow" },
    { img: "/tech/python.svg", alt: "Python" },
  ];

  return (
    <div className={styles.cardContainer}>
      {techs.map((item) => {
        return (
          <div className={styles.techCard}>
            <Image
              src={item.img}
              alt={item.alt}
              width={80}
              height={80}
              title={item.alt}
            />
          </div>
        );
      })}
    </div>
  );
}
