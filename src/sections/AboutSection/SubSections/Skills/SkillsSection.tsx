import React from "react";
import styles from "./SkillsSection.module.css";

import { iSkills } from "../../../../interfaces"

export interface SkillsPorps {
  ObjData: iSkills | undefined,
}

const SkillsSection: React.FC<SkillsPorps> = ({
  ObjData = undefined,
}) => {

  if (ObjData === undefined) {
    return <></>
  }

  console.log("[SKILLS-SEC]",ObjData);

  return (
    <>
      <section id="skills" className={styles["skills-sec"]}>


      </section>
    </>
  );
}

export { SkillsSection };