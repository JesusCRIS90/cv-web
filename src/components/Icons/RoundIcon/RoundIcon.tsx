import React, { CSSProperties } from 'react'

import styles from "./RoundIcon.module.css"


interface BaseProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    innerSize?: number;
    outerSize?: number;
    innerColor?: string;
    outerColor?: string;
}

interface RoundIconProps extends BaseProps {
    name: string;
    data?: BaseProps;
}

export class RoundIconPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            id: options.id,
            className: options.className,
            style: options.style,
            innerSize: options.innerSize,
            outerSize: options.outerSize,
            innerColor: options.innerColor,
            outerColor: options.outerColor
        };
    }
}

function BuildCustomStyle(outerSize: number, outerColor: string, userCustomStyle: Object): CSSProperties {

    const ImageStyle = {
        backgroundColor: outerColor,
        width: `${outerSize}px`,
        height: `${outerSize}px`
    }

    return { ...ImageStyle, ...userCustomStyle };

}


const RoundIcon: React.FC<RoundIconProps> = ({
    name,
    id = "",
    className = "",
    style = {},
    innerSize = 24,
    outerSize = 44,
    innerColor = '#ffffff',
    outerColor = '#555555',
    data = {}
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        innerSize: dataInnerSize = innerSize,
        outerSize: dataOuterSize = outerSize,
        innerColor: dataInnerColor = innerColor,
        outerColor: dataOuterColor = outerColor,
    } = data;

    const combinedClassName = `${styles["round-icon"]} ${dataClassName}`;
    const combinedStyle = BuildCustomStyle(dataOuterSize, dataOuterColor, dataStyle);

    return (

        <div id={dataId} className={combinedClassName} style={combinedStyle}>
            <svg
                width={dataInnerSize} height={dataInnerSize} fill={dataInnerColor}
            >
                <use xlinkHref={`#${name}`} />
            </svg>
        </div>

    )
}

export { RoundIcon };