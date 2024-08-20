import React, { CSSProperties } from 'react'

import useCheckStaticFileExist from '../../../hooks/useCheckStaticFileExist'

import styles from "./Image.module.css"


export interface ImageSize {
    xSize: string,
    ySize: string,
}

interface BaseProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    img?: string,
    size?: ImageSize
}

interface ImageProps extends BaseProps {
    data?: BaseProps;
}

export class ImagePropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            id: options.id,
            className: options.className,
            style: options.style,
            img: options.img,
            size: options.size,
        };
    }
};


function getNoImage(): string {
    return String("../../../assets/No-Image.webp");
}


const Image: React.FC<ImageProps> = ({
    id = "",
    className = "",
    style = {},
    img = "",
    size,
    data = {}
}) => {

    const { fileExists } = useCheckStaticFileExist( img );

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        img: dataImg = img,
        size: dataSize = size,
    } = data;

    const combinedClassName = `${styles["image"]} ${dataClassName}`;
    const { xSize, ySize } = dataSize || {};

    return (

        <img
            src={ fileExists ? dataImg : getNoImage() }
            id={dataId} className={combinedClassName}
            style={{ ...dataStyle, width: xSize, height: ySize }}
            >
        </img>

    )
}

export { Image };