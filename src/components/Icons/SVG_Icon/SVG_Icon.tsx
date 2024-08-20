import React, { CSSProperties } from 'react'

import styles from "./SVG_Icon.module.css"


interface BaseProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    size?: number;
    color?: string;
}

interface SVG_IconProps extends BaseProps {
    name: string;
    data?: BaseProps;
}

export class SVG_LinkPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            id: options.id,
            className: options.className,
            style: options.style,
            size: options.size,
            color: options.color,
        };
    }
}


const SVG_Icon: React.FC<SVG_IconProps> = ({
    name,
    id = "",
    className = "",
    style = {},
    size = 24,
    color = '',
    data = {}
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        size: dataSize = size,
        color: dataColor = color,
    } = data;

    const combinedClassName = `${styles["svg-icon"]} ${dataClassName}`;

    return (
        <svg
            id={dataId} className={combinedClassName} style={dataStyle}
            width={dataSize} height={dataSize} fill={dataColor}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}

export { SVG_Icon };