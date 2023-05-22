import Post from "../../components/Post";
import posts from "../content/posts.json";
import { v4 as uuidv4 } from "uuid";

export const metadata = {
  title: "Browse Articles by Saqlen Mehdi",
  description:
    "Find and read articles on topics like tech, business, AI, ML, programming, etc.",
};

export default function page() {
  return (
    <div>
      <main className={"content-wrapper"}>
        {posts.map((item, index) => {
          return (
            <Post
              date={item.date}
              tag={item.tag}
              img={item.img}
              title={item.title}
              desc={item.desc}
              url={item.url}
              key={uuidv4()}
            />
          );
        })}

        {/* <Post /> */}
      </main>
    </div>
  );
}
