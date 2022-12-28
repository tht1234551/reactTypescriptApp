import { PostItem } from "../interface/PostItem";

export default function Post({ post }: { post: PostItem }): JSX.Element {
  return (
    <article>
      <header>
        <span className="date">{post.data}</span>
        <h2>
          <a href="#;">{post.title}</a>
        </h2>
      </header>
      <a href="#;" className="image fit">
        <img src={post.img} alt="" />
      </a>
      <p>{post.content}</p>
      <ul className="actions special">
        <li>
          <a href="#;" className="button">
            Full Story
          </a>
        </li>
      </ul>
    </article>
  );
}
