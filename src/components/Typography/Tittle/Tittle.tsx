import React, { CSSProperties, Fragment } from 'react'

import { TYPOGRAPHY_LEVEL } from "../../../utils/enums"
import { StringArray2LowerCase } from "../../../utils/utilities"
import { StringArray, TSX_Components } from "../../../utils/customTypes"

import styles from "./Tittle.module.css"


interface BaseProps extends React.PropsWithChildren {
    children?: string,
    id?: string,
    className?: string,
    style?: CSSProperties,
    level?: TYPOGRAPHY_LEVEL,
    keywords?: StringArray
}

export interface TittleProps extends BaseProps {
    data?: BaseProps;
}

export class TittlePropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            children: options.children,
            id: options.id,
            className: options.className,
            style: options.style,
            level: options.level,
            keywords: options.keywords,
        };
    }
}


function renderChildren(words: string, keywords: StringArray): string | TSX_Components {

    if (keywords.length === 0) {
        return words
    }
    
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
    keywords = [],
    data = {}
}) => {

    const {
        children: dataChildren = children,
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        level: dataLevel = level,
        keywords: dataKeywords = keywords
    } = data;

    const combinedClassName = `${styles["tittle"]} ${dataClassName}`;
    const children2draw: string | TSX_Components = renderChildren(dataChildren, dataKeywords);

    if (dataLevel === TYPOGRAPHY_LEVEL.LEVEL_1) {
        return (
            <h1 id={dataId} className={combinedClassName} style={dataStyle} >
                {children2draw}
            </h1>
        )
    }

    if (dataLevel === TYPOGRAPHY_LEVEL.LEVEL_2) {
        return (
            <h2 id={dataId} className={combinedClassName} style={dataStyle} >
                {children2draw}
            </h2>
        )
    }

    if (dataLevel === TYPOGRAPHY_LEVEL.LEVEL_3) {
        return (
            <h3 id={dataId} className={combinedClassName} style={dataStyle} >
                {children2draw}
            </h3>
        )
    }

    if (dataLevel === TYPOGRAPHY_LEVEL.LEVEL_4) {
        return (
            <h4 id={dataId} className={combinedClassName} style={dataStyle} >
                {children2draw}
            </h4>
        )
    }

    if (dataLevel === TYPOGRAPHY_LEVEL.LEVEL_5) {
        return (
            <h5 id={dataId} className={combinedClassName} style={dataStyle} >
                {children2draw}
            </h5>
        )
    }

    if (dataLevel === TYPOGRAPHY_LEVEL.LEVEL_6) {
        return (
            <h6 id={dataId} className={combinedClassName} style={dataStyle} >
                {children2draw}
            </h6>
        )
    }

}

export { Tittle };