import React, { CSSProperties, ReactElement } from 'react'

import { GridLayout2D, ItemGridLayout, VerticalLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';

import { RoundIcon } from '../../../Icons'


import styles from "./ExperienceCard.module.css"



// ------------------------------------------

interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface ExperienceCardProps extends CommonProps {
    key?: number,
    tag?: string,
    startDate?: string,
    endDate?: string,
    role?: string,
    description?: string,
    business?: string,
    techStack?: string[]
}


interface ComponentProps extends ExperienceCardProps {
    experienceDataObj?: ExperienceCardProps;
}

// ------------------------------------------

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

const ExperienceCard: React.FC<ComponentProps> = ({
    id = "",
    className = "",
    style,
    key,
    tag,
    startDate,
    endDate,
    role,
    description,
    business,
    techStack,
    experienceDataObj
}) => {

    const {
        id: experienceCardId = id,
        className: experienceCardClassName = className,
        style: experienceCardStyle = style,
        key: experienceCardKey = key,
        tag: experienceCardTag = tag,
        startDate: experienceCardSartDate = startDate,
        endDate: experienceCardEndDate = endDate,
        role: experienceCardRole = role,
        description: experienceCardDescription = description,
        business: experienceCardBusiness = business,
        techStack: experienceCardTechStack = techStack,

    } = experienceDataObj || {};

    const combinedClassName = `${styles["experience-card"]} ${experienceCardClassName}`;

    const roleDuration = buildDuration(experienceCardSartDate, experienceCardEndDate);
    const iconName = solverTag2Icon(experienceCardTag);
    const skillsUsed = joinStringArray(experienceCardTechStack);


    // console.log("[ EXPERIENCE-CARD ]", experienceDataObj);


    return (
        <>

            <GridLayout2D
                distribution={{ x: '15% auto', y: '40% auto' }}
                id={experienceCardId} className={combinedClassName} style={experienceCardStyle}
            >

                <RoundIcon name={iconName} outerSize={54} innerSize={24} />

                <GridLayout2D
                    className={styles["experience-main-info"]}
                    distribution={{ x: '70% auto', y: '50% auto' }}
                >

                    <ItemGridLayout pos={{ x: 1, y: 1 }} size={{ x: 1, y: 2 }}>

                        <Tittle className={styles["experience-role"]}>
                            {experienceCardRole}
                        </Tittle>
                    
                    </ItemGridLayout>

                    <Tittle className={styles["experience-duration"]}>
                        {roleDuration}
                    </Tittle>

                    <Tittle className={styles["experience-business"]}>
                        {experienceCardBusiness}
                    </Tittle>


                </GridLayout2D>

                {/* Third Component */}
                {/* EMPTY SPACE */}
                <div></div>

                <VerticalLayout>

                    <SingleText
                        className={styles["experience-description"]}
                    >
                        {experienceCardDescription}
                    </SingleText>

                    <SingleText className={styles["experience-skills"]}>
                        {skillsUsed}
                    </SingleText>

                </VerticalLayout>

            </GridLayout2D>
        </>
    )
}

export { ExperienceCard }