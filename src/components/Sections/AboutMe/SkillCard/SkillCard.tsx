import React, { CSSProperties, ReactElement } from 'react'

import { GridLayout1D, VerticalLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';
import { Image } from '../../../Images';


import styles from "./SkillCard.module.css"



// ------------------------------------------

interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

interface Image {
    src: string,
    id: string,
}

interface BaseProps extends CommonProps {
    name?: string;
    description?: string;
    tag?: string,
    image?: Image
}


export interface SkillCardProps extends BaseProps {
    skillDataObj?: BaseProps;
}

// ------------------------------------------




const SkillCard: React.FC<SkillCardProps> = ({
    id = "",
    className = "",
    style,
    name,
    description,
    tag,
    image,
    skillDataObj
}) => {

    const {
        id: skillCardId = id,
        className: skillCardClassName = className,
        style: skillCardStyle = style,
        name: skillCardName = name,
        description: skillCardDescription = description,
        tag: skillCardTag = tag,
        image: skillCardImage = image,

    } = skillDataObj || {};

    const combinedClassName = `${styles["skill-card"]} ${skillCardClassName}`;


    console.log("[ SKILL-CARD ]", skillDataObj);


    return (

        <GridLayout1D
            distribution={"15% auto"}
            id={skillCardId} className={combinedClassName} style={skillCardStyle}
        >

            <Image img={skillCardImage?.src} id={skillCardImage?.id}/>

            <VerticalLayout>
                
                <Tittle>
                    {skillCardName}
                </Tittle>

                <SingleText>
                    {skillCardDescription}
                </SingleText>


            </VerticalLayout>

        </GridLayout1D>
    )
}

export { SkillCard }