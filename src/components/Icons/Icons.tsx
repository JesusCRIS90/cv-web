import React, { CSSProperties } from 'react'

import styles from "./Icons.module.css"



export interface SVG_IconProps extends React.PropsWithChildren {
    name: string;
    id?: string,
    className?: string,
    style?: CSSProperties,
    size?: number;
    color?: string;
}

const SVG_Icon: React.FC<SVG_IconProps> = ({
    name,
    id = "",
    className = "",
    style = {},
    size = 24,
    color = ''
}) => {

    const combinedClassName = `${styles["svg-icon"]} ${className}`;

    return (
        <svg
            id={id} className={combinedClassName} style={style}
            width={size} height={size} fill={color}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}

export {SVG_Icon};
