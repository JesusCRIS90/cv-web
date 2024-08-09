import React, { CSSProperties, ReactElement } from 'react'

import styles from "./Images.module.css"
import useCheckStaticFileExist from '../../hooks/useCheckStaticFileExist'


export interface ImageSize {
    xSize: string,
    ySize: string,
}

export interface ImageProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    children?: ReactElement | ReactElement[],
    img?: string,
    size?: ImageSize
}


function getNoImage(): string {
    return String("../../../assets/No-Image.webp");
}


const Image: React.FC<ImageProps> = ({
    id = "",
    className = "",
    style = {},
    img = "",
    size
}) => {

    const { fileExists } = useCheckStaticFileExist( img );

    const combinedClassName = `${styles["image"]} ${className}`;
    const { xSize, ySize } = size || {};

    return (

        <img
            src={ fileExists ? img : getNoImage() }
            id={id} className={combinedClassName}
            style={{ ...style, width: xSize, height: ySize }}
            >
        </img>

    )
}

export { Image }