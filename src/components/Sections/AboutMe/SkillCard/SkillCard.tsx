import { CSSProperties, ReactElement, PropsWithChildren, FC } from 'react'

import { GridLayout1D, VerticalLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';
import { Image } from '../../../Images';

import { iSkill } from "../../../../interfaces"


import styles from "./SkillCard.module.css"



// ------------------------------------------

interface CommonProps extends PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}


export interface SkillCardProps extends CommonProps {
    skillCard: iSkill | undefined;
}

// ------------------------------------------

const SkillCard: FC<SkillCardProps> = ({
    id = "",
    className = "",
    style,
    skillCard = undefined
}) => {


    if (skillCard === undefined)  {
        return <></>;
    }

    const combinedClassName = `${styles["skill-card"]} ${className}`;


    // console.log("[ SKILL-CARD ]", skillCard);


    return (

        <GridLayout1D
            distribution={"25% auto"}
            id={id} className={combinedClassName} style={style}
        >

            <Image src={skillCard.image.src} id={skillCard.image.id}/>

            <VerticalLayout>
                
                <Tittle>
                    {skillCard.name}
                </Tittle>

                <SingleText>
                    {skillCard.description}
                </SingleText>


            </VerticalLayout>

        </GridLayout1D>
    )
}

export { SkillCard }