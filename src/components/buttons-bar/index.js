import csv from "csvtojson";
import styles from "./styles.module.css";

export const ButtonsBar = ({ setRedirectsData }) => {
  return (
    <div className={styles.buttonsBar}>
      <CsvUpload setRedirectsData={setRedirectsData} />
    </div>
  );
};

function processCsvFile(e, setRedirectsData) {
  e.stopPropagation();
  e.preventDefault();
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = async function (event) {
      const fileContents = event.target.result;

      const jsonData = await csv().fromString(fileContents)
      setRedirectsData(jsonData);
    };
    reader.onerror = function (event) {
      throw new Error("Error reading file");
    };
  }
}

const CsvUpload = ({ setRedirectsData }) => {
  return (
    <div className={styles.csvUpload}>
      <span className={styles.csvUploadText}>Upload CSV file: </span>
      <input
        className={styles.csvUploadInput}
        type="file"
        accept=".csv"
        onChange={(e) => processCsvFile(e, setRedirectsData)}
      />
    </div>
  );
};
