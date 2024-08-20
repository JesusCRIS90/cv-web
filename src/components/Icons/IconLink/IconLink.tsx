import React, { CSSProperties } from 'react'

import styles from "./IconLink.module.css"

interface BaseProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    size?: number;
    color?: string;
    link?: string;
}

interface IconLinkProps extends BaseProps {
    name: string;
    data?: BaseProps;
}

export class IconLinkPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            id: options.id,
            className: options.className,
            style: options.style,
            size: options.size,
            color: options.color,
            link: options.link,
        };
    }
}

const IconLink: React.FC<IconLinkProps> = ({
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

export { IconLink };