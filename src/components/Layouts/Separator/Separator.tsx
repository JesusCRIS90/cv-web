import React, { CSSProperties, ReactElement } from 'react'

import { CenterLayout } from "../../Layouts"

import styles from "./Separator.module.css"


const MAX_THICKNESS = 15;

// ------------------------------------------

interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[] | string,
    id?: string,
    className?: string,
    style?: CSSProperties,
}


export interface SeparatorProps extends CommonProps {
    length?: number,
    thickness?: number,
    colour?: string,
}


interface ComponentProps extends SeparatorProps {
    SeparatorObj?: SeparatorProps;
}

// ------------------------------------------

function AssignLength(lenght: number) {
    if (lenght < 0) return 0;
    if (lenght >= 100) return 100;

    return lenght;
}

function AssignThickness(thickness: number) {
    if (thickness < 0) return 1;
    if (thickness >= MAX_THICKNESS) return MAX_THICKNESS;

    return thickness;
}

function BuildStyle(
    userStyle: React.CSSProperties,
    length: number,
    thickness: number,
    colour: string,
): React.CSSProperties {


    let newCustomStyle = {
        ...userStyle,
        width: `${AssignLength(length)}%`,
        height: `${AssignThickness(thickness)}px`,
        backgroundColor: colour,
    };

    return newCustomStyle;
}


const Separator: React.FC<ComponentProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    length = 30,
    thickness = 1,
    colour = "#ffffff",
    SeparatorObj
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        length: datalength = length,
        thickness: datathickness = thickness,
        colour: dataColour = colour,
    } = SeparatorObj || {};

    const combinedClassName = `${styles.separator} ${dataClassName}`;
    const combinedStyles = BuildStyle(dataStyle, datalength, datathickness, dataColour);


    // console.log("[ SEPARATOR ]", SeparatorObj);


    return (
        <CenterLayout className={styles['separator-container']}>
            <div className={combinedClassName} id={dataId} style={combinedStyles}>
                {children}
            </div>
        </CenterLayout>

    )
}


export { Separator }