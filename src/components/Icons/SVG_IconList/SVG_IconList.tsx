import React, { CSSProperties } from 'react'

import { SVG_Icon } from "../.."

import { iIcon } from "../../../interfaces"

import styles from "./SVG_IconList.module.css"


// interface SVG_Icon {
//     iconName: string;
//     tooltip: string;
// }

interface BaseProps extends React.PropsWithChildren {
    svgIconList: iIcon[];
    id?: string,
    className?: string,
    style?: CSSProperties,
    size?: number;
    color?: string;
}

export interface SvgIconListProps extends BaseProps {
    listData?: BaseProps;
}

const customId = (baseId: string, indId: string | undefined) => {

    if (indId === undefined) indId = "";

    return `${baseId}-${indId}`;
}

const SvgIconList: React.FC<SvgIconListProps> = ({
    svgIconList,
    id = "",
    className = "",
    style = {},
    size = 24,
    color = '',
    listData
}) => {

    const {
        svgIconList: dataSvgIconList = svgIconList || [],
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        size: dataSize = size,
        color: dataColor = color,
    } = listData || {};


    let combinedClassName = `${styles["icon-link-list"]} ${dataClassName} `;

    return (
        <>
            {
                (dataSvgIconList.length > 0 && dataSvgIconList === undefined)
                    ? <></>
                    : dataSvgIconList.map((icon: iIcon) => {
                        const { name, key, tooltip } = icon;

                        return <SVG_Icon
                            id={customId(dataId, tooltip)}
                            className={combinedClassName}
                            style={dataStyle}
                            name={name}
                            key={key}
                            size={dataSize}
                            color={dataColor}
                        />

                    })
            }
        </>
    )
}

export { SvgIconList };