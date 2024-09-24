import React from 'react'

import { SingleText, Tittle } from '../../../Typography';
import { TYPOGRAPHY_LEVEL } from '../../../../utils/enums';

import { iWhoIAm } from "../../../../interfaces"


export interface WhoIamPorps {
    ObjData: iWhoIAm | undefined,
}


const WhoIam: React.FC<WhoIamPorps> = ({
    ObjData = undefined
}) => {

    
    if( ObjData === undefined ){
        return <></>
    }

    const { briefIntro, name, role } = ObjData;

    return (

        <>

            {
                (name === undefined)
                    ? <></>
                    : <Tittle level={TYPOGRAPHY_LEVEL.LEVEL_1} keywords={name.keyword}>
                        {name.text}
                    </Tittle>
            }

            {
                (role === undefined)
                    ? <></>
                    : <Tittle level={TYPOGRAPHY_LEVEL.LEVEL_1} keywords={role.keyword}>
                        {role.text}
                    </Tittle>
            }

            {
                (briefIntro === undefined)
                    ? <></>
                    : <SingleText keywords={briefIntro.keyword}>
                        {briefIntro.text}
                    </SingleText>
            }


        </>
    )
}

export { WhoIam }