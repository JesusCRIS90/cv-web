import React from 'react'

import { GridLayout2D, HorizontalLayout, ItemGridLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';
import { Image } from '../../../Images';

import { LinkIconList, SvgIconList } from '../../../Icons';

// import { TYPOGRAPHY_LEVEL } from '../../utils/enums';

import styles from "./ProjectCard.module.css"



// ------------------------------------------

interface SVG_Icon {
    iconName: string;
    tooltip: string;
}

interface LinkIcon {
    iconName: string;
    link: string;
}

interface BaseProps extends React.PropsWithChildren {
    id?: number;
    tittle?: string;
    image?: string;
    description?: string;
    techStack?: SVG_Icon[];
    links?: LinkIcon[];
}

export interface PortfolioCardProps extends BaseProps {
    PortfolioCard?: BaseProps;
}

// ------------------------------------------




const PortfolioCard: React.FC<PortfolioCardProps> = ({
    id,
    tittle,
    image,
    description,
    techStack,
    links,
    PortfolioCard
}) => {

    const {
        id: portfolioCard_Id = id,
        tittle: portfolioCard_tittle = tittle,
        image: portfolioCard_image = image,
        description: portfolioCard_description = description,
        techStack: portfolioCard_techStack = techStack,
        links: portfolioCard_links = links,
    } = PortfolioCard || {};


    // console.log("[ PROJECT-CARD ]", PortfolioCard);


    return (

        <GridLayout2D
            distribution={{ x: "60% auto", y: "20% 60% auto" }}
        >

            <ItemGridLayout pos={{ x: 1, y: 1 }} size={{ x: 2, y: null }}>

                <Tittle>
                    {portfolioCard_tittle}
                </Tittle>

            </ItemGridLayout>

            <Image img={portfolioCard_image} />

            <SingleText>
                {portfolioCard_description}
            </SingleText>

            <HorizontalLayout>
                {
                    (portfolioCard_techStack === undefined)
                        ? <></>
                        : <SvgIconList svgIconList={portfolioCard_techStack} />
                }
            </HorizontalLayout>

            <HorizontalLayout>
                {
                    (portfolioCard_links === undefined)
                        ? <></>
                        : <LinkIconList linkIconList={portfolioCard_links} />
                }
            </HorizontalLayout>



        </GridLayout2D>
    )
}

export { PortfolioCard }











