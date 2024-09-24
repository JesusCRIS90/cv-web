
import { useContext } from "react";
import styles from "./AboutSection.module.css";
import { ContextStore } from "../../context";

import { ExperienceSection, PresentationSection, SkillsSection } from "./SubSections"


export function AboutSection() {

  const { appManager } = useContext(ContextStore);

  console.log("[ABOUT-SEC]", appManager);

  return (
    <>
      <section id="about" className={styles["about-sec"]}>

        <PresentationSection />
        <ExperienceSection />
        <SkillsSection />

      </section>
    </>
  );
}
