import React from 'react'

import { GridLayout2D, HorizontalLayout, ItemGridLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';
import { Image } from '../../../Images';

import { LinkIconList, SvgIconList } from '../../../Icons';

import { iProject, iPortfolio } from "../../../../interfaces"

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

export interface ProjectCardProps {
    projectCard: iProject | undefined;
}

export interface PortfolioProps {
    portfolio: iPortfolio | undefined;
}



// ------------------------------------------




const PortfolioCard: React.FC<ProjectCardProps> = ({
    projectCard = undefined
}) => {

    // const {
    //     id: portfolioCard_Id = id,
    //     tittle: portfolioCard_tittle = tittle,
    //     image: portfolioCard_image = image,
    //     description: portfolioCard_description = description,
    //     techStack: portfolioCard_techStack = techStack,
    //     links: portfolioCard_links = links,
    // } = PortfolioCard || {};


    if( projectCard === undefined ){
        return <></>
    }

    // console.log("[ PROJECT-CARD ]", PortfolioCard);


    return (

        <GridLayout2D
            distribution={{ x: "60% auto", y: "20% 60% auto" }}
        >

            <ItemGridLayout pos={{ x: 1, y: 1 }} size={{ x: 2, y: null }}>

                <Tittle>
                    {projectCard.tittle}
                </Tittle>

            </ItemGridLayout>

            <Image src={ projectCard.image.src } />

            <SingleText>
                {projectCard.description.text}
            </SingleText>

            <HorizontalLayout>
                {
                    (projectCard.techStack === undefined)
                        ? <></>
                        : <SvgIconList svgIconList={projectCard.techStack} />
                }
            </HorizontalLayout>

            <HorizontalLayout>
                {
                    (projectCard.links === undefined)
                        ? <></>
                        : <LinkIconList linkIconList={projectCard.links} />
                }
            </HorizontalLayout>



        </GridLayout2D>
    )
}

const Portfolio: React.FC<PortfolioProps> = ({
    portfolio = undefined
}) => {


    if( portfolio === undefined ){
        return <></>
    }

    // console.log("[ PROJECT-CARD ]", PortfolioCard);


    return (
        <>
            {
                portfolio.projects.map( (project: iProject) => {

                    return <PortfolioCard projectCard={project} key={project.key}/>

                })
            }
        </>
    )
}

export { PortfolioCard, Portfolio}











