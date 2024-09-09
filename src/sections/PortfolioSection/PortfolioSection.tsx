import { useContext } from "react";
import { PortfolioCard } from "../../components/Sections"

import styles from "./PortfolioSection.module.css";
import { DataContext } from "../../context/DataProvider";
import { Tittle } from "../../components";

export function PortfolioSection() {

  const { data } = useContext(DataContext);
  const { Portfolio } = data;

  // console.log("[SECTION-PORTFOLIO]", Portfolio);


  return (
    <>
      <section id="portfolio" className={styles["portfolio-sec"]}>

        <Tittle>
          Projects
        </Tittle>

        <PortfolioCard PortfolioCard={Portfolio[1]} />

      </section>
    </>
  );
}

