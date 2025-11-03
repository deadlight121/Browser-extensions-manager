import ExtensionCard from "../ExtensionCard/ExtensionCard";
import { extensionsData } from "./ExtensionsData";
import styles from "./sectionContainer.module.css";
import { useState } from "react";
import Button from "../Buttons/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Extensions() {
  const [items, setItems] = useState(extensionsData);
  const [filter, setFilter] = useState("all");
  const [sticky, setSticky] = useState(new Set());

  function toggle(id) {
    setItems((list) =>
      list.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );

    setSticky((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    setTimeout(() => {
      setSticky((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 180);
  }

  function removeItem(id) {
    setItems((list) => list.filter((item) => item.id !== id));
  }

  const visibleItems = items.filter((item) => {
    if (sticky.has(item.id)) return true;
    if (filter === "all") return true;
    if (filter === "active") return item.active;
    if (filter === "inactive") return !item.active;
    return true;
  });

  return (
    <div>
      <div className={styles.labelContainer}>
        <h1>Extensions List</h1>
        <div className={styles.toggleButtons}>
          <Button
            onClick={() => setFilter("all")}
            active={filter === "all"}
            text="All"
          ></Button>
          <Button
            onClick={() => setFilter("active")}
            active={filter === "active"}
            text="Active"
          ></Button>
          <Button
            onClick={() => setFilter("inactive")}
            active={filter === "inactive"}
            text="Inactive"
          ></Button>
        </div>
      </div>

      <section className={styles.sectionContainer}>
        <AnimatePresence>
          {visibleItems.map((el) => (
            <motion.div
              style={{ display: "block" }}
              key={el.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -16,
                transition: { delay: 0.18, duration: 0.22 },
              }}
            >
              <ExtensionCard
                data={el}
                onToggle={() => toggle(el.id)}
                onRemove={() => removeItem(el.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
}
