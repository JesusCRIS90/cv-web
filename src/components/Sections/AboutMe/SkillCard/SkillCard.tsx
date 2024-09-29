import { CSSProperties, ReactElement, PropsWithChildren, FC } from 'react'

import { GridLayout1D, ItemGridLayout, VerticalLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';
import { Image } from '../../../Images';

import { iSkill } from "../../../../interfaces"

import {
    POLICY_STANDART_POSITION as ST_POL,
    POLICY_VERTICAL_POSITION as VET_POL
} from '../../../../utils/enums';

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


    if (skillCard === undefined) {
        return <></>;
    }

    const combinedClassName = `${styles["skill-card"]} ${className}`;


    // console.log("[ SKILL-CARD ]", skillCard);


    return (

        <GridLayout1D
            distribution={"25% auto"}
            id={id} className={combinedClassName} style={style} groupPolicyPos={ST_POL.CENTER_LEFT}
        >

            <Image src={skillCard.image.src} id={skillCard.image.id} className={styles['skill-image']} />

            <VerticalLayout groupPolicyPos={VET_POL.CENTER_LEFT} >

                <Tittle className={styles['skill-name']}>
                    {skillCard.name}
                </Tittle>

                <SingleText className={styles['skill-tag']}>
                    {skillCard.description}
                </SingleText>


            </VerticalLayout>

        </GridLayout1D>
    )
}

export { SkillCard }