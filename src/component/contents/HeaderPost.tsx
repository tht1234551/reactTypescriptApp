import { useEffect, useState } from "react";
import { PostItem } from "./../interface/PostItem";

export default function HeaderPost({ post }: { post: PostItem }): JSX.Element {
  const [headerPost, setHeaderPost] = useState<PostItem>({});

  useEffect(() => {
    setHeaderPost(post);
  }, [post]);

  return (
    <article className="post featured">
      <header className="major">
        <span className="date">{headerPost.data}</span>
        <h2>
          <a href="#;">{headerPost.title}</a>
        </h2>
        <p>{post.content}</p>
      </header>
      <a href="#;" className="image main">
        <img src={headerPost.img} alt="" />
      </a>
      <ul className="actions special">
        <li>
          <a href="#;" className="button large">
            Full Story
          </a>
        </li>
      </ul>
    </article>
  );
}
