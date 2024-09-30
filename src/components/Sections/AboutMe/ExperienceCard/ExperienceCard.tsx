import { CSSProperties, ReactElement, PropsWithChildren, FC } from 'react'

import { GridLayout2D, ItemGridLayout, VerticalLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';

import { RoundIcon } from '../../../Icons'

import { iExperience } from "../../../../interfaces"

import { 
    POLICY_STANDART_POSITION as ST_POL,
    POLICY_VERTICAL_POSITION as VE_POL 
} from '../../../../utils/enums';


import styles from "./ExperienceCard.module.css"


// ------------------------------------------

interface CommonProps extends PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface ExperienceCardProps extends CommonProps {
    experience: iExperience | undefined
}

const ExperienceCard: FC<ExperienceCardProps> = ({
    id = "",
    className = "",
    style = {},
    experience = undefined
}) => {


    if (experience === undefined)  {
        return <></>;
    }

    const combinedClassName = `${styles["experience-card"]} ${className}`;

    const roleDuration = buildDuration(experience.startDate, experience.endDate);
    const iconName = solverTag2Icon(experience.tag);
    const skillsUsed = joinStringArray(experience.techStack);

    // console.log("[ EXPERIENCE-CARD ]", experience, description.text);

    return (
        <>

            <GridLayout2D
                distribution={{ x: '15% auto', y: '40% auto' }}
                id={id} className={combinedClassName} style={style}
                groupPolicyPos={ST_POL.CENTER_LEFT}
            >

                <RoundIcon name={iconName} outerSize={54} innerSize={24} 
                   className={styles['experience-card-icon']} />

                <GridLayout2D
                    className={styles["experience-main-info"]}
                    distribution={{ x: '70% auto', y: '50% auto' }}
                    groupPolicyPos={ST_POL.CENTER_LEFT}
                >

                    <ItemGridLayout pos={{ x: 1, y: 1 }} size={{ x: 1, y: 2 }}>

                        <Tittle className={styles["experience-role"]}>
                            {experience.role}
                        </Tittle>
                    
                    </ItemGridLayout>

                    <Tittle className={styles["experience-duration"]}>
                        {roleDuration}
                    </Tittle>

                    <Tittle className={styles["experience-business"]}>
                        {experience.business}
                    </Tittle>


                </GridLayout2D>

                {/* Third Component */}
                {/* EMPTY SPACE */}
                <div></div>

                <VerticalLayout groupPolicyPos={VE_POL.LEFT_LEFT} className={styles['experience-details-container']}>

                    <SingleText
                        className={styles["experience-description"]}
                    >
                        {experience.description.text}
                    </SingleText>

                    <SingleText className={styles["experience-skills"]}>
                        {skillsUsed}
                    </SingleText>

                </VerticalLayout>

            </GridLayout2D>
        </>
    )
}



// ------------------- COMPONENT HELPER FUNCTIONS -----------------------

const solverTag2Icon = (tag: string | undefined): string => {

    if (tag === undefined) return "no-icon";

    switch (tag) {
        case "work":
            return "bw-common-briefcase"

        case "formation":
            return "bw-common-book-open"

        default:
            return "no-icon"
    }
}

const joinStringArray = (array: string[] | undefined): string => {

    // console.log("[EXP-CARD-SKILLS]", array);

    if (array == undefined) return ""

    return array.join(',');
}

const buildDuration = (startDate: string | undefined, endDate: string | undefined): string => {

    const start = (startDate === undefined) ? "" : startDate.toUpperCase();
    const end = (endDate === undefined) ? "" : endDate.toUpperCase();

    return `${start} - ${end}`
}

export { ExperienceCard }