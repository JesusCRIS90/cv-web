import React from 'react'

import { SingleText, Tittle } from '../../../Typography';
import { TYPOGRAPHY_LEVEL } from '../../../../utils/enums';

import { iWhoIAm } from "../../../../interfaces"

import styles from "../../../../sections/HomeSection/HomeSection.module.css"


export interface WhoIamPorps {
    ObjData: iWhoIAm | undefined,
}


const WhoIam: React.FC<WhoIamPorps> = ({
    ObjData = undefined
}) => {


    if (ObjData === undefined) {
        return <></>
    }

    const { briefIntro, name, role } = ObjData;

    return (

        <>

            {
                (name === undefined)
                    ? <></>
                    : <Tittle level={TYPOGRAPHY_LEVEL.LEVEL_1} keywords={name.keyword}
                        className={styles['who-i-am-name']} >
                        {name.text}
                    </Tittle>
            }

            {
                (role === undefined)
                    ? <></>
                    : <Tittle level={TYPOGRAPHY_LEVEL.LEVEL_1} keywords={role.keyword}
                        className={styles['who-i-am-role']}>
                        {role.text}
                    </Tittle>
            }

            {
                (briefIntro === undefined)
                    ? <></>
                    : <SingleText keywords={briefIntro.keyword} className={styles['who-i-am-description']}>
                        {briefIntro.text}
                    </SingleText>
            }


        </>
    )
}

export { WhoIam }