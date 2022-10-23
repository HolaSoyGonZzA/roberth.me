import "./Footer.scss";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Roberth González</p>
    </footer>
  );
}
