import React, { CSSProperties, Fragment } from 'react'

import { StringArray2LowerCase } from "../../../utils/utilities"
import { StringArray, TSX_Components } from "../../../utils/customTypes"

import styles from "./SingleText.module.css"


interface BaseProps extends React.PropsWithChildren {
    children?: string,
    id?: string,
    className?: string,
    style?: CSSProperties,
    keywords?: StringArray
}

export interface SingleTextProps extends BaseProps {
    data?: BaseProps;
}

export class SingleTextPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            children: options.children,
            id: options.id,
            className: options.className,
            style: options.style,
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

const SingleText: React.FC<SingleTextProps> = ({
    children = "",
    id = "",
    className = "",
    style = {},
    keywords = [],
    data = {}
}) => {

    const {
        children: dataChildren = children,
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        keywords: dataKeywords = keywords
    } = data;

    const combinedClassName = `${styles["single-text"]} ${dataClassName}`;
    const children2draw: string | TSX_Components = renderChildren(dataChildren, dataKeywords);

    return (
        <p id={dataId} className={combinedClassName} style={dataStyle} >
            {children2draw}
        </p>
    )

}

export { SingleText };