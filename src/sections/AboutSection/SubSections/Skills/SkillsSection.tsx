import { useContext } from "react";
import styles from "./SkillsSection.module.css";
import { ContextStore } from "../../../../context";



export function SkillsSection() {

  const { appManager } = useContext(ContextStore);

  // console.log("[SKILLS-SEC]",appManager);

  return (
    <>
      <section id="skills" className={styles["skills-sec"]}>


      </section>
    </>
  );
}