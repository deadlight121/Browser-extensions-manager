import styles from "./Theme.module.css";

export default function Theme({ theme, onToggleTheme }) {
  return (
    <button onClick={onToggleTheme} className={styles.headerRight}>
      {theme === "dark" ? (
        <img src="/assets/images/icon-sun.svg" alt="" />
      ) : (
        <img src="/assets/images/icon-moon.svg" alt="" />
      )}
    </button>
  );
}
