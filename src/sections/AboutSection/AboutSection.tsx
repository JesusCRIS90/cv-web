import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import styles from "./AboutSection.module.css";
import { SkillCard, ExperienceCard, SummaryCard, BubbleFilter } from "../../components/Sections";

import { FindTags } from '../../utils/utilities'
import { Card, CenterLayout, ResponsiveCardGrid, Separator } from "../../components/Layouts";

export function AboutSection() {

  const { data } = useContext(DataContext);


  const testSkillCard = data.About.TechStack.listData[0];
  const testExperienceCard = data.About.Experience[1];
  const testSummaryCard = data.About.Summary[0];

  console.log("[ABOUT SECTION]", data.About, testSummaryCard);

  // console.log( "[TAGS]", FindTags(data.About.TechStack.listData) )

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

        {/* <ExperienceCard experienceDataObj={testexperienceCard}/> */}

        <SummaryCard summaryDataObj={testSummaryCard} />

        <Separator />

        <BubbleFilter tags={FindTags(data.About.TechStack.listData)} />

        <Separator />

        <ResponsiveCardGrid gap={50}>

          <Card maxWidth={300} minWidth={250}>

          </Card>

        </ResponsiveCardGrid>








      </section>
    </>
  );
}
