import "./Nav.css";
import { links } from "../data/nav";

function Nav() {
  return (
    <nav aria-label="Main">
      <ul role="list">
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
