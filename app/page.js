"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Header } from "../src/components/header";
import { ButtonsBar } from "../src/components/buttons-bar";
import { RedirectionsUi } from "../src/components/redirections-ui";
import { NoData } from "../src/components/no-data";

export default function Home() {
  const [redirectsData, setRedirectsData] = useState();
  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <ButtonsBar setRedirectsData={setRedirectsData} />
        {redirectsData ? (
          <RedirectionsUi redirectsData={redirectsData} />
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
}
