import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Info() {
  let nav = useNavigate();
  console.log(nav);
  let loc = useLocation();
  console.log(loc);

  let { userName } = useParams();
  console.log(userName);
  return (
    <div id="main">
      <section className="post">
        <h1>Info</h1>
      </section>
    </div>
  );
}
