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

const autoIncrementId = ( baseId: string, currentNumber: number ) => {
    return `${baseId}-${currentNumber++}`;
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
    let autoIncrementNumber = 0

    return (
        <>
            {
                (dataLinkIconsList.length > 0 && dataLinkIconsList === undefined)
                    ? <></>
                    : dataLinkIconsList.map((icon: iLinkIcon) => {
                        const { name, link, tooltip, key } = icon;    autoIncrementNumber+= 1;
                        
                        return <IconLink
                            id={autoIncrementId(dataId, autoIncrementNumber)}
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