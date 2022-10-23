import styles from "./Footer.module.scss";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Roberth González</p>
    </footer>
  );
}
