import { useContext } from "react";

import { ContextStore } from "../../context";

import { ExperienceSection, PresentationSection, SkillsSection } from "./SubSections"
import { iBio, iExperiences, iSkills, iSummaries } from "../../interfaces";

import styles from "./AboutSection.module.css";
import { Separator } from "../../components/Layouts";


export function AboutSection() {

  const { appManager } = useContext(ContextStore);

  const bio = appManager.getContext<iBio>("BRIEF-BIO")?.getData();
  const summaries = appManager.getContext<iSummaries>("SUMMARY")?.getData();
  const experience = appManager.getContext<iExperiences>("EXPERIENCE")?.getData();
  const skills = appManager.getContext<iSkills>("SKILLS")?.getData();

  // console.log("[ABOUT-SEC]", appManager);

  return (
    <>
      <section id="about" className={styles["about-sec"]}>

        <div className={styles['about-sec-content-layout-presentation']}>
          <PresentationSection ObjBio={bio} ObjSummary={summaries} />
        </div>

        <Separator length={50} id="app-separators"/>

        <div className={styles['about-sec-content-layout-experience']}>
          <ExperienceSection ObjData={experience} />
        </div>

        <Separator length={50} id="app-separators"/>

        <div className={styles['about-sec-content-layout-skills']}>
          <SkillsSection ObjData={skills} />
        </div>

      </section>
    </>
  );
}
