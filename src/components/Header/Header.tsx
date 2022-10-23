import "./Header.scss";

const socialLinks = [
  {
    name: "twitter",
    href: "https://twitter.com/rxb3rth",
  },
  {
    name: "github",
    href: "https://github.com/rxb3rth",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/roberth-gonzalez/",
  },
];

export function Header() {
  return (
    <nav className="nav wrapper">
      <a className="logo link" href="/">
        RG
      </a>
      <ul className="social-links">
        {socialLinks.map((link) => (
          <li className="social-links__item">
            <a className="link" href={link.href} target="_blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
