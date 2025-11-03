import styles from "./Extensions.module.css";

export default function ExtensionCard({ data, onToggle, onRemove }) {
  return (
    <div className={styles.card}>
      <div className={styles.textAndImg}>
        <div>
          <img src={data.img} alt="" />
        </div>
        <div className={styles.cardText}>
          {" "}
          <h2>{data.name}</h2>
          <p>{data.text}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.remove} onClick={onRemove}>
          Remove
        </button>
        <label className={styles.toggle}>
          <input type="checkbox" checked={data.active} onChange={onToggle} />
          <span />
        </label>
      </div>
    </div>
  );
}
