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

const autoIncrementId = ( baseId: string, currentNumber: number ) => {
    return `${baseId}-${currentNumber++}`;
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

    const combinedClassName = `${styles["icon-link-list"]} ${dataClassName}`;
    let autoIncrementNumber = 0

    return (
        <>
            {
                (dataSvgIconList.length > 0 && dataSvgIconList === undefined)
                    ? <></>
                    : dataSvgIconList.map((icon: iIcon) => {
                        const { name, key, tooltip } = icon;    autoIncrementNumber+= 1;
                        
                        return <SVG_Icon
                            id={autoIncrementId(dataId, autoIncrementNumber)}
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