import React from "react";
import styles from "./ExperienceSection.module.css";

import { iExperiences, iExperience } from "../../../../interfaces"
import { Tittle } from "../../../../components";
import { EXPERIENCE_CARD_MAX_WIDTH, EXPERIENCE_CARD_MIN_WIDTH } from "../../../../utils/globalInfo";
import { Card, ResponsiveCardGrid } from "../../../../components/Layouts";
import { ExperienceCard } from "../../../../components/Sections";

export interface ExperiencePorps {
  ObjData: iExperiences | undefined,
}

const ExperienceSection: React.FC<ExperiencePorps> = ({
  ObjData = undefined,
}) => {

  if (ObjData === undefined) {
    return <></>
  }

  console.log("[EXPERIENCE-SEC]", ObjData);

  return (
    <>
      <section id="experience" className={styles["experience-sec"]}>

        <Tittle>Experience</Tittle>

        <ResponsiveCardGrid gap={10}>

          {
            ObjData.experience.map((experience: iExperience) => {
              // ObjData.skills.map((skill: iSkill) => {

              return (
                <Card
                  maxWidth={EXPERIENCE_CARD_MAX_WIDTH}
                  minWidth={EXPERIENCE_CARD_MIN_WIDTH}
                  key={experience.key}
                >
                  <ExperienceCard experience={experience} />
                </Card>
              )

            })
          }

        </ResponsiveCardGrid>

      </section>
    </>
  );
}

export { ExperienceSection };