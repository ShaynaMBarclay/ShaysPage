import { scroller } from "react-scroll";

function Navbar() {
  const scrollToCenter = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollOffset =
      section.getBoundingClientRect().top +
      window.scrollY -
      (viewportHeight / 2 - sectionHeight / 2);

    window.scrollTo({
      top: scrollOffset,
      behavior: "smooth",
    });
  };

  const links = [
    { id: "socials", emoji: "💗" },
    { id: "shop", emoji: "💻" },
    { id: "projects", emoji: "✨" },
    { id: "media", emoji: "🎬" },
    { id: "message", emoji: "💌" },
    { id: "music", emoji: "🎶"}
  ];

  return (
    <nav className="shays-navbar">
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="scroll-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToCenter(link.id);
              }}
            >
              {link.emoji}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
