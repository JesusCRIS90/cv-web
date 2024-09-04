import React, { CSSProperties, ReactElement } from 'react'
import { 
    POLICY_STANDART_POSITION, 
    POLICY_ORIENTATION
} from "../../../utils/enums"

import styles from "./ItemGridLayout.module.css"


interface IntVect2D {
    x: number | null,
    y: number | null
}



interface BaseProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
    policyPos?: POLICY_STANDART_POSITION,
}

interface ItemGridLayoutProps extends BaseProps {
    pos: IntVect2D,
    size: IntVect2D
    data?: BaseProps;
}


export class ItemGridLayoutPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            children: options.children,
            id: options.id,
            className: options.className,
            style: options.style,
            policyPos: options.policyPos,
        };
    }
}


function BuildPositionLayout( 
    userCustomStyle: React.CSSProperties, 
    pos: IntVect2D, 
    size: IntVect2D 
    ): React.CSSProperties
{

    let posStyle = { ...userCustomStyle };

    // STYLE => X-POS or Col-Pos
    if( pos.x !== null ){
        
        if( size.x !== null ){
            const gridColumn = `${pos.x} / span ${size.x}`
            posStyle = {  ...posStyle, gridColumn };
        }

    }

    // STYLE => Y-POS or Row-Pos
    if( pos.y !== null ){
        
        if( size.y !== null ){
            const gridRow = `${pos.y} / span ${size.y}`
            posStyle = {  ...posStyle, gridRow };
        }

    }

    return posStyle;
}

function BuildStyleLayout( 
    userStyle: React.CSSProperties,
    pos: IntVect2D,
    size: IntVect2D,
    ): React.CSSProperties
{

    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...BuildPositionLayout( newCustomStyle, pos, size ) };

    return newCustomStyle;
}

const ItemGridLayout: React.FC<ItemGridLayoutProps> = ({
    children, pos, size,
    id = "",
    className = "",
    style = {},
    policyPos = POLICY_STANDART_POSITION.CENTER_CENTER,
    data = {}
}) => {

    const {
        children: dataChildren = children,
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        policyPos: dataComPos = policyPos,
    } = data;

    const combinedClassName = `${styles["grid-item-layout"]} ${dataClassName}`;
    const combinedStyle = BuildStyleLayout( dataStyle, pos, size );   
    // const combinedStyle = { ...style }
    
    // const combinedStyle = BuildStylePositionLayout( dataStyle, dataOrientation, distribution, dataComPos, dataGap );

    return (

        <div id={dataId} className={combinedClassName} style={combinedStyle}>
            {dataChildren}
        </div>

    )
}

export { ItemGridLayout };