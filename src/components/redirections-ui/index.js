import { DataTable } from "../data-table";
import styles from "./styles.module.css";

export const RedirectionsUi = ({ redirectsData }) => {
  return (
    <div className={styles.redirectionsUiWrapper}>
      <DataTable redirectsData={redirectsData} />
    </div>
  );
};
