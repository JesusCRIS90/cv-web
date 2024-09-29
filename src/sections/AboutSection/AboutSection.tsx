import { useContext } from "react";

import { ContextStore } from "../../context";

import { ExperienceSection, PresentationSection, SkillsSection } from "./SubSections"
import { iBio, iExperiences, iSkills, iSummaries } from "../../interfaces";

import styles from "./AboutSection.module.css";


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

        <div className={styles['about-sec-content-layout-experience-skills']}>
          <ExperienceSection ObjData={experience} />
          <SkillsSection ObjData={skills} />
        </div>



      </section>
    </>
  );
}
