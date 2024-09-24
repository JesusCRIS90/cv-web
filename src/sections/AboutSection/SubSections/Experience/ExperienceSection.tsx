import React from "react";
import styles from "./ExperienceSection.module.css";

import { iExperiences } from "../../../../interfaces"

export interface ExperiencePorps {
  ObjData: iExperiences | undefined,
}

const ExperienceSection: React.FC<ExperiencePorps> = ({
  ObjData = undefined,
}) => {

  if (ObjData === undefined) {
    return <></>
  }

  console.log("[EXPERIENCE-SEC]",ObjData);

  return (
    <>
      <section id="experience" className={styles["experience-sec"]}>


      </section>
    </>
  );
}

export { ExperienceSection };