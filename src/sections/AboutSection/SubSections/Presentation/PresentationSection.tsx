import { useContext } from "react";
import styles from "./PresentationSection.module.css";
import { ContextStore } from "../../../../context";



export function PresentationSection() {

  const { appManager } = useContext(ContextStore);

  // console.log("[PRESENTATION-SEC]",appManager);

  return (
    <>
      <section id="presentation" className={styles["presentation-sec"]}>


      </section>
    </>
  );
}