import React, { CSSProperties, ReactElement } from 'react'

import { GridLayout1D, VerticalLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';
import { Image } from '../../../Images';


import styles from "./SkillCard.module.css"



// ------------------------------------------
interface Image {
    src: string,
    id: string,
}

interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface SkillCardProps extends CommonProps {
    name?: string;
    description?: string;
    tag?: string,
    image?: Image
}


 interface ComponentProps extends SkillCardProps {
    skillDataObj?: SkillCardProps;
}

// ------------------------------------------




const SkillCard: React.FC<ComponentProps> = ({
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


    // console.log("[ SKILL-CARD ]", skillDataObj);


    return (

        <GridLayout1D
            distribution={"15% auto"}
            id={skillCardId} className={combinedClassName} style={skillCardStyle}
        >

            <Image src={skillCardImage?.src} id={skillCardImage?.id}/>

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