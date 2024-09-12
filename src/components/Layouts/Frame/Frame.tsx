import React, { CSSProperties, ReactElement } from 'react'


import styles from "./Frame.module.css"



// ------------------------------------------

interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

interface Size {
    width: string,
    height: string,
}

export interface FrameProps extends CommonProps {
    frameSize?: Size,
}


interface ComponentProps extends FrameProps {
    FrameObj?: FrameProps;
}

// ------------------------------------------

function BuildStyle( 
    userStyle: React.CSSProperties,
    frameSize: Size,
    ): React.CSSProperties
{

    let newCustomStyle = { 
        ...userStyle,
        width: frameSize.width,
        height: frameSize.height
    };

    return newCustomStyle;
}


const Frame: React.FC<ComponentProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    frameSize = { width: "auto", height: "auto" },
    FrameObj
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        frameSize: dataFrameSize = frameSize,
    } = FrameObj || {};

    const combinedClassName = `${styles.frame} ${dataClassName}`;
    const combinedStyles = BuildStyle( dataStyle, dataFrameSize );




    console.log("[ FRAME ]", FrameObj);


    return (
        <div className={combinedClassName} id={dataId} style={combinedStyles}>
            {children}
        </div>
    )
}


export { Frame }