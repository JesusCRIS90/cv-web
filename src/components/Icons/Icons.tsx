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

export interface SVG_IconLinkBaseProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    size?: number;
    color?: string;
    link?: string;
}

export interface SVG_IconLinkProps extends SVG_IconLinkBaseProps {
    name: string;
    data?: SVG_IconLinkBaseProps;
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

const SVG_IconLink: React.FC<SVG_IconLinkProps> = ({
    name,
    id = "",
    className = "",
    style = {},
    size = 24,
    color = '',
    link = "",
    data = {}
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        size: dataSize = size,
        color: dataColor = color,
        link: dataLink = link,
    } = data;

    const combinedClassName = `${styles["svg-icon-link"]} ${dataClassName}`;

    return (
        <a href={dataLink} target='_blank' rel='noreferrer'>
            <svg
                id={dataId} className={combinedClassName} style={dataStyle}
                width={dataSize} height={dataSize} fill={dataColor}
            >
                <use xlinkHref={`#${name}`} />
            </svg>
        </a>

    )
}

export { SVG_Icon, SVG_IconLink };
