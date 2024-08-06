import React, { CSSProperties, ReactElement } from 'react'

import { AnchorPoint } from "../../utils/enums"

import styles from "./Background.module.css"


function BuildCustomStyle(img: string, anchorPoint: AnchorPoint, userCustomStyle: Object): CSSProperties {

    const ImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: anchorPoint,
    }

    return { ...ImageStyle, ...userCustomStyle };

}

interface BackgroundProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    children?: ReactElement | ReactElement[],
    img?: string,
    anchorPoint?: AnchorPoint,
}

const BackGround: React.FC<BackgroundProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    img = "",
    anchorPoint = AnchorPoint.CENTER_CENTER
  }) => {

    const combinedStyle = BuildCustomStyle(img, anchorPoint, style);
    const combinedClassName = `${styles["bg"]} ${className}`;

    return (
        <section id={id} className={combinedClassName} style={combinedStyle} >
            {children}
        </section>
    )
}


export default BackGround
