import styles from "./Button.module.css";

export default function Button({ active, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={active ? styles.activeButton : styles.button}
    >
      {text}
    </button>
  );
}
