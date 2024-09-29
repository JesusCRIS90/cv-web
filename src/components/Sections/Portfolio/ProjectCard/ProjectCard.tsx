import { FC } from 'react'

import { GridLayout2D, HorizontalLayout, ItemGridLayout, Card, ResponsiveCardGrid, Frame } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';
import { Image } from '../../../Images';

import { LinkIconList, SvgIconList } from '../../../Icons';

import { iProject, iPortfolio } from "../../../../interfaces"

import {
    PROJECT_CARD_MAX_WIDTH,
    PROJECT_CARD_MIN_WIDTH
} from "../../../../utils/globalInfo"

import styles from "./ProjectCard.module.css"



// ------------------------------------------

export interface ProjectCardProps {
    projectCard: iProject | undefined;
}

export interface PortfolioProps {
    portfolio: iPortfolio | undefined;
}



// ------------------------------------------




const PortfolioCard: FC<ProjectCardProps> = ({
    projectCard = undefined
}) => {


    if (projectCard === undefined) {
        return <></>
    }

    // console.log("[ PROJECT-CARD ]", projectCard, projectCard.tittle);


    return (

        <GridLayout2D className={styles['project-card']}
            distribution={{ x: "60% auto", y: "20% 65% auto" }}
        >

            <ItemGridLayout pos={{ x: 1, y: 1 }} size={{ x: 2, y: null }}>

                <Tittle className={styles['project-tittle']}>
                    {projectCard.tittle}
                </Tittle>

            </ItemGridLayout>

            <Frame className={styles['project-image']}>
                <Image src={projectCard.image.src} />
            </Frame>

            <SingleText className={styles['project-description']}>
                {projectCard.description.text}
            </SingleText>

            <HorizontalLayout>
                {
                    (projectCard.techStack === undefined)
                        ? <></>
                        : <SvgIconList svgIconList={projectCard.techStack} className={styles['project-tech-icons']} />
                }
            </HorizontalLayout>

            <HorizontalLayout>
                {
                    (projectCard.links === undefined)
                        ? <></>
                        : <LinkIconList linkIconList={projectCard.links} className={styles['project-tech-links']} />
                }
            </HorizontalLayout>

        </GridLayout2D>
    )
}

const Portfolio: FC<PortfolioProps> = ({
    portfolio = undefined
}) => {


    if (portfolio === undefined) {
        return <></>
    }

    // console.log("[ PROJECT-CARD ]", PortfolioCard);


    return (
        <ResponsiveCardGrid gap={15}>
            {
                portfolio.projects.map((project: iProject) => {

                    return (
                        <Card
                            maxWidth={PROJECT_CARD_MAX_WIDTH}
                            minWidth={PROJECT_CARD_MIN_WIDTH}
                            key={project.key}
                        >
                            <PortfolioCard projectCard={project} />
                        </Card>
                    )


                })
            }
        </ResponsiveCardGrid>
    )
}

export { PortfolioCard, Portfolio }











