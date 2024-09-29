import { useContext } from "react";

import { ContextStore } from "../../context";

import { Tittle } from "../../components";
import { Portfolio } from "../../components/Sections";

import { CenterLayout } from "../../components/Layouts";

import { iPortfolio } from "../../interfaces";


import styles from "./PortfolioSection.module.css";


export function PortfolioSection() {

  const { appManager } = useContext(ContextStore);

  const projects = appManager.getContext<iPortfolio>("PORTFOLIO")?.getData();

  // console.log("[PORTFOLIO-SEC]",appManager);

  return (
    <>
      <section id="projects" className={styles["projects-sec"]}>
        
        <CenterLayout>
          <Tittle className={styles.header}>Projects</Tittle>
        </CenterLayout>

        <Portfolio portfolio={projects} />

      </section>
    </>
  );
}

