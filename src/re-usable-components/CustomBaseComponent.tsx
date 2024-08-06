import React, { CSSProperties, ReactElement } from 'react'

import styles from "./CustomBaseComponent.module.css"



export interface CustomBaserops extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    children?: ReactElement | ReactElement[],
}

const CustomBaseComponent: React.FC<CustomBaserops> = ({
    children,
    id = "",
    className = "",
    style = {},
  }) => {

    const combinedClassName = `${styles["custom-base-component"]} ${className}`;

    return (
        <div id={id} className={combinedClassName} style={style} >
            {children}
        </div>
    )
}

export default CustomBaseComponent;
