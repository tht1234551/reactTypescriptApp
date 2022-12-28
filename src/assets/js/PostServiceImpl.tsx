import { PostItem } from "../../component/interface/PostItem";
import img1 from "./../../assets/images/pic01.jpg";
import img2 from "./../../assets/images/pic02.jpg";
import img3 from "./../../assets/images/pic03.jpg";
import img4 from "./../../assets/images/pic04.jpg";
import img5 from "./../../assets/images/pic05.jpg";

function sampleData(): Promise<PostItem[]> {
  const postArr: PostItem[] = [
    {
      data: "April 25, 2017",
      title: (
        <>
          And this is a<br />
          massive headline
        </>
      ),
      content: (
        <>
          Aenean ornare velit lacus varius enim ullamcorper proin aliquam
          <br />
          facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
          <br />
          amet nullam sed etiam veroeros.
        </>
      ),
      img: img1,
    },
    {
      data: "April 24, 2017",
      title: (
        <>
          Sed magna
          <br />
          ipsum faucibus
        </>
      ),
      content: (
        <>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in
          <br />
          faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis
          <br />
          magna etiam.
        </>
      ),
      img: img2,
    },
    {
      data: "April 22, 2017",
      title: (
        <>
          Primis eget
          <br />
          imperdiet lorem
        </>
      ),
      content: (
        <>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </>
      ),
      img: img3,
    },
    {
      data: "April 24, 2017",
      title: (
        <>
          Sed magna
          <br />
          ipsum faucibus
        </>
      ),
      content: (
        <>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in
          <br />
          faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis
          <br />
          magna etiam.
        </>
      ),
      img: img4,
    },
    {
      data: "April 24, 2017",
      title: (
        <>
          Sed magna
          <br />
          ipsum faucibus
        </>
      ),
      content: (
        <>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in
          <br />
          faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis
          <br />
          magna etiam.
        </>
      ),
      img: img5,
    },
  ];

  return new Promise((resolve) => setTimeout(() => resolve(postArr), 300));
}

interface PostService {
  create(): boolean;
  read(): PostItem;
  readList(): Promise<PostItem[]>;
  update(): boolean;
  delete(): boolean;
}

export type { PostItem };

let PostServiceImpl: PostService = {
  create(): boolean {
    return false;
  },
  read(): PostItem {
    return {} as PostItem;
  },
  async readList(): Promise<PostItem[]> {
    return (await sampleData()) || [];
  },
  update(): boolean {
    return false;
  },
  delete(): boolean {
    return false;
  },
};

export default PostServiceImpl;
