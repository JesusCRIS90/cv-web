
import { useContext } from "react";
import styles from "./PortfolioSection.module.css";
import { ContextStore } from "../../context";
import { iPortfolio } from "../../interfaces";
import { Portfolio } from "../../components/Sections";


export function PortfolioSection() {

  const { appManager } = useContext(ContextStore);

  const projects = appManager.getContext<iPortfolio>("PORTFOLIO")?.getData();

  // console.log("[PORTFOLIO-SEC]",appManager);

  return (
    <>
      <section id="portfolio" className={styles["portfolio-sec"]}>

        <Portfolio portfolio={projects} />

      </section>
    </>
  );
}

