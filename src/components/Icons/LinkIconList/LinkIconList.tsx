import React, { CSSProperties } from 'react'

import { IconLink } from "../.."

import { iLinkIcon } from "../../../interfaces"

import styles from "./LinkIconList.module.css"


// interface LinkIcon {
//     iconName: string;
//     link: string;
// }

interface BaseProps extends React.PropsWithChildren {
    linkIconList: iLinkIcon[];
    id?: string,
    className?: string,
    style?: CSSProperties,
    size?: number;
    color?: string;
}

export interface LinkIconListProps extends BaseProps {
    listData?: BaseProps;
}

const customId = ( baseId: string, indId: string | undefined) => {
    
    if (indId === undefined) indId = "";
    
    return `${baseId}-${indId}`;
}

const LinkIconList: React.FC<LinkIconListProps> = ({
    linkIconList,
    id = "",
    className = "",
    style = {},
    size = 24,
    color = '',
    listData
}) => {

    const {
        linkIconList: dataLinkIconsList = linkIconList || [],
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        size: dataSize = size,
        color: dataColor = color,
    } = listData || {};

    const combinedClassName = `${styles["icon-link-list"]} ${dataClassName}`;

    return (
        <>
            {
                (dataLinkIconsList.length > 0 && dataLinkIconsList === undefined)
                    ? <></>
                    : dataLinkIconsList.map((icon: iLinkIcon) => {
                        const { name, link, tooltip, key } = icon;
                        return <IconLink
                            id={customId(dataId, tooltip)}
                            className={combinedClassName}
                            style={dataStyle}
                            name={name}
                            key={key}
                            link={link}
                            size={dataSize}
                            color={dataColor}
                        />

                    })
            }
        </>
    )
}

export { LinkIconList };