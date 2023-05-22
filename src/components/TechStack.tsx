import Image from "next/image";
import styles from "../styles/home.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function TechStack() {
  const techs = [
    { img: "/tech/nextjs.svg", alt: "Next.JS", disabled: false },
    { img: "/tech/reactjs.svg", alt: "React.JS", disabled: false },
    { img: "/tech/nodejs.svg", alt: "Node.JS", disabled: false },
    { img: "/tech/mongodb.svg", alt: "MongoDB", disabled: false },
    { img: "/tech/typescript.svg", alt: "TypeScript", disabled: false },
    { img: "/tech/scss.svg", alt: "SCSS", disabled: false },
    { img: "/tech/html.svg", alt: "HTML 5", disabled: false },
    { img: "/tech/css.svg", alt: "CSS 3", disabled: false },
    { img: "/tech/python.svg", alt: "Python", disabled: false },
    { img: "/tech/django.svg", alt: "Django", disabled: true },
    { img: "/tech/pytorch.svg", alt: "Pytorch", disabled: true },
    { img: "/tech/tensorflow.svg", alt: "Tensorflow", disabled: true },
    { img: "/tech/opencv.svg", alt: "OpenCV", disabled: true },
  ];

  return (
    <div className={styles.cardContainer}>
      {techs.map((item) => {
        return (
          <div
            className={`${styles.techCard} ${
              item.disabled ? "disabled-div" : null
            }`}
            key={uuidv4()}
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={60}
              height={60}
              title={item.alt}
            />
            <p>{item.alt}</p>
          </div>
        );
      })}
    </div>
  );
}
