import React, { CSSProperties, ReactElement } from 'react'

import { AnchorPoint } from "../../../utils/enums"

import styles from "./Background.module.css"



interface BaseProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
    img?: string,
    anchorPoint?: AnchorPoint,
}

interface BackgroundProps extends BaseProps {
    data?: BaseProps;
}

export class BackgroundPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            children: options.children,
            id: options.id,
            className: options.className,
            style: options.style,
            img: options.img,
            anchorPoint: options.anchorPoint
        };
    }
}

function BuildCustomStyle(img: string, anchorPoint: AnchorPoint, userCustomStyle: Object): CSSProperties {

    const ImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: anchorPoint,
    }

    return { ...ImageStyle, ...userCustomStyle };

}

const BackGround: React.FC<BackgroundProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    img = "",
    anchorPoint = AnchorPoint.CENTER_CENTER,
    data = {}
}) => {

    const {
        children: dataChildren = children,
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        img: dataImg = img,
        anchorPoint: dataAnchorPoint = anchorPoint
    } = data;

    const combinedStyle = BuildCustomStyle(dataImg, dataAnchorPoint, dataStyle);
    const combinedClassName = `${styles["bg"]} ${dataClassName}`;

    return (
        <section id={dataId} className={combinedClassName} style={combinedStyle} >
            {dataChildren}
        </section>
    )
}


export {BackGround}
