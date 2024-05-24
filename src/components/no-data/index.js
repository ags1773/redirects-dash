import styles from "./styles.module.css";

export const NoData = () => {
  return (
    <div className={styles.noDataWrapper}>
      Please upload CSV file containing redirects
    </div>
  );
};
