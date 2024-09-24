import { useContext } from "react";
import styles from "./ExperienceSection.module.css";
import { ContextStore } from "../../../../context";



export function ExperienceSection() {

  const { appManager } = useContext(ContextStore);

  // console.log("[EXPERIENCE-SEC]",appManager);

  return (
    <>
      <section id="experience" className={styles["experience-sec"]}>


      </section>
    </>
  );
}