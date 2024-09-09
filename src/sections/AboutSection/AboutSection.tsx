import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import styles from "./AboutSection.module.css";
import { SkillCard } from "../../components/Sections";

export function AboutSection() {

  const { data } = useContext(DataContext);


  const testSkillCard = data.About.TechStack.listData[0];

  console.log("[ABOUT SECTION]", data.About, testSkillCard);

  return (
    <>
      <section id="about" className={styles["about-sec"]}>

        <SkillCard 
          description={testSkillCard.skillDescription} 
          name={testSkillCard.skillName}
          tag={testSkillCard.tag}
          image={testSkillCard.image}
        />

        {/* <SkillCard 
          skillDataObj={testSkillCard}
        /> */}


      </section>
    </>
  );
}
