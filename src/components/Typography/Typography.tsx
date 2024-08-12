import React, { CSSProperties, ReactElement, Fragment } from 'react'

import { TYPOGRAPHY_LEVEL } from "../../utils/enums"
import { StringArray2LowerCase } from "../../utils/utilities"
import { StringArray, TSX_Components } from "../../utils/customTypes"

import styles from "./Typography.module.css"


export interface TittleProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    children?: string,
    level?: TYPOGRAPHY_LEVEL,
    keywords?: StringArray
}


function renderChildren(words: string, keywords: StringArray): TSX_Components {

    let id_key = 0;
    const keywords2check = StringArray2LowerCase(keywords);


    const result = words.split(" ").map((word) => {

        if (keywords2check.includes(word.toLowerCase()))
            return <span key={id_key++}>{word} </span>;

        else
            return <Fragment key={id_key++}>{word} </Fragment>;

    });

    return result;
}


const Tittle: React.FC<TittleProps> = ({
    children = "",
    id = "",
    className = "",
    style = {},
    level = TYPOGRAPHY_LEVEL.LEVEL_1,
    keywords = []
}) => {

    const combinedClassName = `${styles["tittle"]} ${className}`;


    let children2draw: string | TSX_Components = children;
    if( keywords.length > 0 ){
        children2draw = renderChildren( children, keywords );
    }

    
    if (level === TYPOGRAPHY_LEVEL.LEVEL_1) {
        return (
            <h1 id={id} className={combinedClassName} style={style} >
                {children2draw}
            </h1>
        )
    }

    if (level === TYPOGRAPHY_LEVEL.LEVEL_2) {
        return (
            <h2 id={id} className={combinedClassName} style={style} >
                {children2draw}
            </h2>
        )
    }

    if (level === TYPOGRAPHY_LEVEL.LEVEL_3) {
        return (
            <h3 id={id} className={combinedClassName} style={style} >
                {children2draw}
            </h3>
        )
    }

    if (level === TYPOGRAPHY_LEVEL.LEVEL_4) {
        return (
            <h4 id={id} className={combinedClassName} style={style} >
                {children2draw}
            </h4>
        )
    }

    if (level === TYPOGRAPHY_LEVEL.LEVEL_5) {
        return (
            <h5 id={id} className={combinedClassName} style={style} >
                {children2draw}
            </h5>
        )
    }

    if (level === TYPOGRAPHY_LEVEL.LEVEL_6) {
        return (
            <h6 id={id} className={combinedClassName} style={style} >
                {children2draw}
            </h6>
        )
    }

}

export { Tittle };