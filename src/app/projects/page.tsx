import Project from "@/components/Project";
import projects from "../content/projects.json";
import { v4 as uuidv4 } from "uuid";

export const metadata = {
  title: "Technical Projects Catalogue | Saqlen Mehdi",
  description:
    "Browse technical projects done by Saqlen Mehdi using technologies like Next.Js, React.Js, Python, etc.",
};

export default function page() {
  return (
    <div className={"content-wrapper"}>
      {projects.map((item) => {
        return (
          <Project
            img={item.img}
            title={item.title}
            desc={item.desc}
            url={item.url}
            key={uuidv4()}
          />
        );
      })}
    </div>
  );
}
