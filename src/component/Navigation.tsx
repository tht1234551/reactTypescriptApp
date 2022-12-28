import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

function Icons(): JSX.Element {
  return (
    <ul className="icons">
      <li>
        <a href="#;" className="icon brands fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#;" className="icon brands fa-facebook-f">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#;" className="icon brands fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="#;" className="icon brands fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  );
}

export default function Navigation(): JSX.Element {
  const { pathname }: { pathname: string } = useLocation();

  const CustomLink = useCallback(
    ({ to, children }: { to: string; children: string }): JSX.Element => (
      <li className={to === pathname ? "active" : ""}>
        <Link to={to}>{children}</Link>
      </li>
    ),
    [pathname]
  );

  return (
    <nav id="nav">
      <ul className="links">
        <CustomLink to="/">This is Massively</CustomLink>
        <CustomLink to="/generic">Generic Page</CustomLink>
        <CustomLink to="/elements">Elements Reference</CustomLink>
        <CustomLink to="/info/velopert">info</CustomLink>
      </ul>
      <Icons />
    </nav>
  );
}
