import { CSSProperties, ReactElement, PropsWithChildren, FC } from 'react'


import styles from "./Card.module.css"



// ------------------------------------------

interface CommonProps extends PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface CardProps extends CommonProps {
    minWidth: number,
    maxWidth: number,
}


// ------------------------------------------

function BuildStyle(
    userStyle: React.CSSProperties,
    maxWidth: number,
    minWidth: number,
): React.CSSProperties {

    let Style = {
        ...userStyle,
        minWidth: minWidth,
        maxWidth: maxWidth,
    }

    return Style;
}



const Card: FC<CardProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    maxWidth,
    minWidth
}) => {

    const combinedClassName = `${styles['card-container']} ${className}`;

    // console.log("[ CARD-CONTAINER ]", skillDataObj);


    return (
        <div className={combinedClassName} id={id} style={BuildStyle(style, maxWidth, minWidth)}>
            {children}
        </div>
    )
}

export { Card }