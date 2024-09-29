import { CSSProperties, ReactElement, PropsWithChildren, FC } from 'react'

import { GridLayout2D, HorizontalLayout, ItemGridLayout, ItemGridSpacer, VerticalLayout } from '../../../Layouts';

import { SingleText, Tittle } from '../../../Typography';

import { RoundIcon, SvgIconList } from '../../../Icons'

import { iSummaries, iSummary, iIcon } from "../../../../interfaces"


import styles from "./SummaryCard.module.css"
import {
    POLICY_STANDART_POSITION as ST_POS,
    POLICY_VERTICAL_POSITION as VPOS
} from '../../../../utils/enums';



// ------------------------------------------

interface CommonProps extends PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface SummaryCardProps extends CommonProps {
    summary: iSummary | undefined
}

// ------------------------------------------


const SummaryCard: React.FC<SummaryCardProps> = ({
    id = "",
    className = "",
    style,
    summary = undefined
}) => {

    if (summary === undefined)  {
        return <></>;
    }

    const combinedClassName = `${styles["summary-card"]} ${className}`;

    // console.log("[ SUMMARY-CARD ]", summaryDataObj);

    return (
        <>

            <GridLayout2D
                distribution={{ x: '20% auto', y: '70% auto' }}
                id={id} className={combinedClassName} style={style}
                groupPolicyPos={ST_POS.CENTER_LEFT}
            >
                <VerticalLayout
                    className={styles['summary-secondary-container']}
                    groupPolicyPos={VPOS.CENTER_RIGHT}
                >

                    <Tittle className={styles['summary-secondary-number']}>
                        {`+${summary.secNumber}`}
                    </Tittle>

                    <Tittle className={styles['summary-secondary-text']}>
                        {summary.secText}
                    </Tittle>

                </VerticalLayout>

                <Tittle className={styles['summary-main-text']}>
                    {summary.mainText}
                </Tittle>

                <ItemGridSpacer/>

                <HorizontalLayout className={styles['summary-icons-container']}>
                    <SvgIconList svgIconList={summary.icons} className={styles['summary-icons']} />
                </HorizontalLayout>

            </GridLayout2D>
        </>
    )
}

export { SummaryCard }