import { useEffect, useState } from "react";
import HeaderPost from "./contents/HeaderPost";
import Post from "./contents/Post";
import PostServiceImpl from "../assets/js/PostServiceImpl";
import { PostItem } from "./interface/PostItem";
import PagiNation from "./block/PagiNation";

export default function MainContents(): JSX.Element {
  const [headerPost, setHeaderPost] = useState<PostItem>({});
  const [postArr, setPostArr] = useState<PostItem[]>([]);

  useEffect(() => {
    PostServiceImpl.readList().then((postArr: PostItem[]) => {
      setHeaderPost(postArr.shift() || {});
      setPostArr(postArr || []);
    });
    return () => {};
  }, []);

  return (
    <div id="main">
      <HeaderPost post={headerPost}></HeaderPost>

      <section className="posts">
        {postArr.map((post, index) => (
          <Post key={index} post={post}></Post>
        ))}
      </section>

      <footer>
        <PagiNation />
      </footer>
    </div>
  );
}
