import Post from "../../components/Post";
import posts from "../content/posts.json";
import { v4 as uuidv4 } from "uuid";

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
