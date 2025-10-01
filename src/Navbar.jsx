import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="shays-navbar">
      <ul className="navbar-links">
        <li>
          <ScrollLink
            to="top"
            smooth={true}
            duration={500}
            offset={-50}
            className="scroll-link"
            activeClass="active"
          >
            🏠
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="shop"
            smooth={true}
            duration={500}
            offset={-50}
            className="scroll-link"
            activeClass="active"
          >
            💻
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="scroll-link"
            activeClass="active"
          >
            ✨
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="media"
            smooth={true}
            duration={500}
            offset={-50}
            className="scroll-link"
            activeClass="active"
          >
            🎬
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="message"
            smooth={true}
            duration={500}
            offset={-50}
            className="scroll-link"
            activeClass="active"
          >
            💌
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
