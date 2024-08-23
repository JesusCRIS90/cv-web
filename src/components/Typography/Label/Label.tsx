import React, { CSSProperties } from 'react'

// import { TSX_Components } from "../../../utils/customTypes"

import styles from "./Label.module.css"

interface BaseProps extends React.PropsWithChildren {
    children?: string,
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface LabelProps extends BaseProps {
    data?: BaseProps;
}

export class LabelPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            children: options.children,
            id: options.id,
            className: options.className,
            style: options.style,
        };
    }
}

const Label: React.FC<LabelProps> = ({
    children = "",
    id = "",
    className = "",
    style = {},
    data = {}
}) => {

    const {
        children: dataChildren = children,
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
    } = data;

    const combinedClassName = `${styles["default-label"]} ${dataClassName}`;


    return (
        <span id={dataId} className={combinedClassName} style={dataStyle} >
            {dataChildren}
        </span>
    )

}

export { Label };