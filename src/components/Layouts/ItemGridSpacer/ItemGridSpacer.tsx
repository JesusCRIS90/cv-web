import React, { CSSProperties, ReactElement } from 'react'

import styles from "./ItemGridSpacer.module.css"


// ------------------------------------------

interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[] | string,
    id?: string,
    className?: string,
    style?: CSSProperties,
}

interface VectGridItem {
    pos: number | null,
    span: number | null
}

export interface ItemGridSpacerProps extends CommonProps {
    x?: VectGridItem,
    y?: VectGridItem,
}


interface ComponentProps extends ItemGridSpacerProps {
    ObjProps?: ItemGridSpacerProps;
}

// ------------------------------------------

function BuildPositionLayout( 
    userCustomStyle: React.CSSProperties, 
    xVect: VectGridItem, 
    yVect: VectGridItem 
    ): React.CSSProperties
{

    let posStyle = { ...userCustomStyle };

    // STYLE => X-POS or Col-Pos
    if( xVect.pos !== null ){
        
        if( xVect.span !== null ){
            const gridColumn = `${xVect.pos} / span ${xVect.span}`
            posStyle = {  ...posStyle, gridColumn };
        }

    }

    // STYLE => Y-POS or Row-Pos
    if( yVect.pos !== null ){
        
        if( yVect.span !== null ){
            const gridRow = `${yVect.pos} / span ${yVect.span}`
            posStyle = {  ...posStyle, gridRow };
        }

    }

    return posStyle;
}

function BuildStyle(
    userStyle: React.CSSProperties,
    x: VectGridItem,
    y: VectGridItem,
): React.CSSProperties {

    userStyle = { ...BuildPositionLayout( userStyle, x, y ) };

    return userStyle;
}


const ItemGridSpacer: React.FC<ComponentProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    x = { pos: null, span: null },
    y = { pos: null, span: null },
    ObjProps
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        x: dataX = x,
        y: dataY = y,
    } = ObjProps || {};

    const combinedClassName = `${styles['item-grid-spacer']} ${dataClassName}`;
    const combinedStyle = BuildStyle( dataStyle, dataX, dataY );


    console.log("[ ITEM-GRID-SPACER ]", ObjProps);


    return (
        <div id={dataId} className={combinedClassName} style={combinedStyle}>
            {children}
        </div>
    )
}


export { ItemGridSpacer }