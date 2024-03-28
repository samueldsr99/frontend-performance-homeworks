import styles from "./styles.module.css";

export default function Skeleton() {
  return (
    <article className={styles.root}>
      <div className={styles.image} />
      <div className={styles.description}>
        <div className={styles.title} />
        <div className={styles.ingredientsContainer}>
          <div className={styles.ingredientVariant1} />
          <div className={styles.ingredientVariant2} />
          <div className={styles.ingredientVariant1} />
        </div>
      </div>
    </article>
  );
}
