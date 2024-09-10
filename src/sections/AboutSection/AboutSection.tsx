import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import styles from "./AboutSection.module.css";
import { SkillCard, ExperienceCard } from "../../components/Sections";

export function AboutSection() {

  const { data } = useContext(DataContext);


  const testSkillCard = data.About.TechStack.listData[0];
  const testexperienceCard = data.About.Experience[0];

  // console.log("[ABOUT SECTION]", data.About, testSkillCard, testexperienceCard);

  return (
    <>
      <section id="about" className={styles["about-sec"]}>

        {/* <SkillCard 
          description={testSkillCard.skillDescription} 
          name={testSkillCard.skillName}
          tag={testSkillCard.tag}
          image={testSkillCard.image}
        /> */}

        {/* <SkillCard 
          skillDataObj={testSkillCard}
        /> */}

        <ExperienceCard experienceDataObj={testexperienceCard}/>


      </section>
    </>
  );
}
