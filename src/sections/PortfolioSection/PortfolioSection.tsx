import { useContext } from "react";
import { ProtfolioCard } from "../../components/Portfolio"

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

        <ProtfolioCard PortfolioCard={Portfolio[1]} />

      </section>
    </>
  );
}

