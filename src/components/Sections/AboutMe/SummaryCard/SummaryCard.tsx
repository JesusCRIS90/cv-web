import React, { CSSProperties, ReactElement } from 'react'

import { GridLayout2D, HorizontalLayout, ItemGridLayout, ItemGridSpacer, VerticalLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';

import { RoundIcon, SvgIconList } from '../../../Icons'


import styles from "./SummaryCard.module.css"
import {
    POLICY_STANDART_POSITION as ST_POS,
    POLICY_VERTICAL_POSITION as VPOS
} from '../../../../utils/enums';



// ------------------------------------------

interface Icon {
    iconName: string,
    tooltip: string
}

interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface SummaryCardProps extends CommonProps {
    key?: number,
    mainText?: string,
    secondaryNumber?: number,
    secondaryText?: string,
    icons?: Icon[],
}


interface ComponentProps extends SummaryCardProps {
    summaryDataObj?: SummaryCardProps;
}

// ------------------------------------------


const SummaryCard: React.FC<ComponentProps> = ({
    id = "",
    className = "",
    style,
    key,
    mainText,
    secondaryNumber,
    secondaryText,
    icons,
    summaryDataObj
}) => {

    const {
        id: CardId = id,
        className: CardClassName = className,
        style: CardStyle = style,
        key: CardKey = key,
        mainText: CardMainText = mainText,
        secondaryNumber: CardSecNumber = secondaryNumber,
        secondaryText: CardSecText = secondaryText,
        icons: CardIcons = icons,

    } = summaryDataObj || {};

    const combinedClassName = `${styles["summary-card"]} ${CardClassName}`;

    const iconsList: Icon[] = (CardIcons === undefined) ? [] : CardIcons;



    console.log("[ SUMMARY-CARD ]", summaryDataObj);


    return (
        <>

            <GridLayout2D
                distribution={{ x: '20% auto', y: '70% auto' }}
                id={CardId} className={combinedClassName} style={CardStyle}
                groupPolicyPos={ST_POS.CENTER_LEFT}
            >
                <VerticalLayout
                    className={styles['summary-secondary-container']}
                    groupPolicyPos={VPOS.CENTER_RIGHT}
                >

                    <Tittle className={styles['summary-secondary-number']}>
                        {`+${CardSecNumber}`}
                    </Tittle>

                    <Tittle className={styles['summary-secondary-text']}>
                        {CardSecText}
                    </Tittle>

                </VerticalLayout>

                <Tittle className={styles['summary-main-text']}>
                    {CardMainText}
                </Tittle>

                <ItemGridSpacer/>

                <HorizontalLayout className={styles['summary-icons-container']}>
                    <SvgIconList svgIconList={iconsList} color='#ffffff' size={32} />
                </HorizontalLayout>

            </GridLayout2D>
        </>
    )
}

export { SummaryCard }