// import { useEffect } from "react";
// import csv from "csvtojson";
import styles from "./styles.module.css";

// useEffect(() => {}, [csvData]);

export const DataTable = ({ redirectsData }) => {
  return (
    <div className={styles.dataTableWrapper}>
      {JSON.stringify(redirectsData)}
    </div>
  );
};
