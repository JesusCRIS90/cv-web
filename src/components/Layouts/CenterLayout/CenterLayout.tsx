import React, { CSSProperties, ReactElement } from 'react'

import styles from "./CenterLayout.module.css"


interface BaseProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties
}

interface CenterLayoutProps extends BaseProps {
    data?: BaseProps;
}

export class CenterLayoutPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            children: options.children,
            id: options.id,
            className: options.className,
            style: options.style
        };
    }
}

const CenterLayout: React.FC<CenterLayoutProps> = ({
    children,
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

    const combinedClassName = `${styles["center-layout"]} ${dataClassName}`;
    
    const combinedStyle = { ...dataStyle }

    return (

        <div id={dataId} className={combinedClassName} style={combinedStyle}>
            {dataChildren}
        </div>

    )
}

export { CenterLayout };