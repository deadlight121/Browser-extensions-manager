import styles from "./Header.module.css";
import Theme from "../ThemeButton/Theme";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header>
      <div className={styles.headerLeft}>
        <img src="/assets/images/logo.png" alt="" />
        <h2>Extensions</h2>
      </div>
      <Theme theme={theme} onToggleTheme={onToggleTheme}></Theme>
    </header>
  );
}
