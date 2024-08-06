import React, { ReactElement } from 'react'


import styles from "./Background.module.css"


export enum AnchorPoint {
    TOP_LEFT,
    TOP_CENTER,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_CENTER,
    BOTTOM_RIGHT,
    CENTER_LEFT,
    CENTER_CENTER,
    CENTER_RIGHT
}

function getAnchorPointToCSS(anchorPoint: AnchorPoint) {

    switch (anchorPoint) {
        case AnchorPoint.TOP_LEFT:
            return "top left";

        case AnchorPoint.TOP_CENTER:
            return "top center";

        case AnchorPoint.TOP_RIGHT:
            return "top right";

        case AnchorPoint.BOTTOM_LEFT:
            return "bottom left";

        case AnchorPoint.BOTTOM_CENTER:
            return "bottom center";

        case AnchorPoint.BOTTOM_RIGHT:
            return "bottom right";

        case AnchorPoint.CENTER_LEFT:
            return "center left";

        case AnchorPoint.CENTER_CENTER:
            return "center";

        case AnchorPoint.CENTER_RIGHT:
            return "center right";
    }

}

function BuildCustomStyle( img: string, anchorPoint: AnchorPoint, userCustomStyle: Object ){
    
    const ImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: getAnchorPointToCSS( anchorPoint ),
    }

    return { ...ImageStyle, ...userCustomStyle };

}

interface BackgroundProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: Object,
    children?: ReactElement | ReactElement[],
    img?: string,
    anchorPoint?: AnchorPoint,
}

const BackGround = ({ children, id = "", className = "", style = {}, img = "",
    anchorPoint = AnchorPoint.CENTER_CENTER }: BackgroundProps) => {

    const style2apply = BuildCustomStyle( img, anchorPoint, style );
    const className2Apply = `${styles["bg"]} ${className}`;

    return (
        <section id={id} className={ className2Apply } style={ style2apply } >
            {children}
        </section>
    )
}



export default BackGround
