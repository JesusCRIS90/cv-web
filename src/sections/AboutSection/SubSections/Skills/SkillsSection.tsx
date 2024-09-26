import { FC, useEffect, useState } from "react";
import styles from "./SkillsSection.module.css";

import { SkillCard, BubbleFilter } from "../../../../components/Sections"

import { iSkills, iSkill } from "../../../../interfaces"
import { Card, ResponsiveCardGrid } from "../../../../components/Layouts";
import { SKILL_CARD_MAX_WIDTH, SKILL_CARD_MIN_WIDTH } from "../../../../utils/globalInfo";
import { Tittle } from "../../../../components";

export interface SkillsPorps {
  ObjData: iSkills | undefined,
}

const filterSkillsFromTag = ( skills: iSkill[] | undefined, tag: string ):iSkill[]=> {

  if (skills === undefined) return [];

  // If the tag is "All", return all skills without filtering
  if (tag === "All") return skills;

  // Filter the skills based on the tag
  return skills.filter(skill => skill.tag === tag);
}

const getTags = ( skills: iSkill[] | undefined ):string[] => {

  let tags: string[] = ["All"];

  if( skills !== undefined ){
    skills.forEach( ( skill ) => {
      tags.push( skill.tag );
    } )
  }

  return Array.from(new Set(tags));
}


const SkillsSection: FC<SkillsPorps> = ({
  ObjData = undefined,
}) => {

  const [filter, setFilter] = useState<string>( "All" );
  const [ skills, setSkills ] = useState< iSkill[] | undefined >( ObjData?.skills );

  useEffect( () => {

    if( ObjData === undefined ) return;

    // console.log("-------------Effect undesired--------------------");

    setSkills( ObjData.skills );

  }, [ObjData] );

  useEffect( () => {

    // console.log("[SKILLS-SEC]", filter);

    setSkills( () => filterSkillsFromTag( ObjData?.skills, filter ) );

  }, [filter] );


  if (ObjData === undefined || skills === undefined) {
    return <></>
  }


  // console.log("[SKILLS-SEC]", ObjData);



  return (
    <>
      <section id="skills" className={styles["skills-sec"]}>

        <Tittle>Skills</Tittle>

        <BubbleFilter tags={getTags(ObjData.skills)} filterDispatcher={setFilter}/>

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
                  <SkillCard skillCard={ skill } />
                </Card>
              )

            })
          }

        </ResponsiveCardGrid>


      </section>
    </>
  );
}

export { SkillsSection };