import { FC, useEffect, useState } from "react";

import { SkillCard, BubbleFilter } from "../../../../components/Sections"

import { iSkills, iSkill } from "../../../../interfaces"
import { Card, CenterLayout, ResponsiveCardGrid } from "../../../../components/Layouts";
import { LIMIT_SKILLS_FILTER, SKILL_CARD_MAX_WIDTH, SKILL_CARD_MIN_WIDTH } from "../../../../utils/globalInfo";
import { Tittle } from "../../../../components";

export interface SkillsPorps {
  ObjData: iSkills | undefined,
}

import styles from "./SkillsSection.module.css";


const SkillsSection: FC<SkillsPorps> = ({
  ObjData = undefined,
}) => {

  const [filter, setFilter] = useState<string>("All");
  const [showmore, setshowmore] = useState<boolean>(false);
  const [skills, setSkills] = useState<iSkill[] | undefined>(ObjData?.skills);


  useEffect(() => {

    if (ObjData === undefined) return;

    setSkills(applySkillsFilter());

  }, [ObjData]);

  useEffect(() => {

    setSkills(applySkillsFilter());

  }, [filter, showmore]);


  const onClickShowMoreStateUpdate = () => {
    setshowmore(!showmore);
  }

  const applySkillsFilter = (): iSkill[] => {

    let newSkillsList = filterSkillsFromTag(ObjData?.skills, filter);
    newSkillsList = filterSkillsFromLimit(newSkillsList, !showmore, LIMIT_SKILLS_FILTER);

    return newSkillsList;
  }


  if (ObjData === undefined || skills === undefined) {
    return <></>
  }

  return (
    <>
      <section id="skills" className={styles["skills-sec"]}>

        <CenterLayout>
          <Tittle className={styles['skills-tittle']} >Skills</Tittle>
        </CenterLayout>


        <BubbleFilter tags={getTags(ObjData.skills)}
          filterState={{ dispatcher: setFilter, state: filter }}
          className={styles['skills-bubble-filter']} />

        <ResponsiveCardGrid gap={10}>

          {
            skills.map((skill: iSkill) => {
              // ObjData.skills.map((skill: iSkill) => {

              return (
                <Card
                  maxWidth={SKILL_CARD_MAX_WIDTH}
                  minWidth={SKILL_CARD_MIN_WIDTH}
                  key={skill.key}
                >
                  <SkillCard skillCard={skill} />
                </Card>
              )

            })
          }

        </ResponsiveCardGrid>

        <CenterLayout>
          <button onClick={onClickShowMoreStateUpdate} className={styles['skills-button']}>
            {
              (showmore) ? "Show Less" : "Show More"
            }
          </button>
        </CenterLayout>



      </section>
    </>
  );
}

const filterSkillsFromTag = (skills: iSkill[] | undefined, tag: string): iSkill[] => {

  if (skills === undefined) return [];

  // If the tag is "All", return all skills without filtering
  if (tag === "All") return skills;

  // Filter the skills based on the tag
  return skills.filter(skill => skill.tag === tag);
}

const filterSkillsFromLimit = (skills: iSkill[] | undefined, applyLimit: boolean, limit: number): iSkill[] => {

  if (skills === undefined) return [];

  if (applyLimit) {
    return skills.slice(0, limit);
  }

  return skills;
}

const getTags = (skills: iSkill[] | undefined): string[] => {

  let tags: string[] = ["All"];

  if (skills !== undefined) {
    skills.forEach((skill) => {
      tags.push(skill.tag);
    })
  }

  return Array.from(new Set(tags));
}

export { SkillsSection };