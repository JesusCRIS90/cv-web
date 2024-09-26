import React, { CSSProperties, ReactElement } from 'react'

import useCheckStaticFileExist from '../../../hooks/useCheckStaticFileExist'

import { IMAGE_FITTING } from '../../../utils/enums'

import styles from "./Image.module.css"


interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface ImageSize {
    xSize: string,
    ySize: string,
}

interface ImageProps extends CommonProps {
    src?: string,
    size?: ImageSize,
    fittingMode?: IMAGE_FITTING,
}


interface ComponentProps extends ImageProps {
    data?: ImageProps;
}

export class ImagePropsBuilder {

    static build(
        options: Partial<ComponentProps> = {}
    ) {
        return {
            id: options.id,
            className: options.className,
            style: options.style,
            src: options.src,
            size: options.size,
            fittingMode: options.fittingMode,
        };
    }
};


function getNoImage(): string {
    return String("../../../assets/No-Image.webp");
}


const Image: React.FC<ComponentProps> = ({
    id = "",
    className = "",
    style = {},
    src = "",
    size = { xSize: "100%", ySize: "100%" },
    fittingMode = IMAGE_FITTING.CONTAIN,
    data = {}
}) => {

    // const { fileExists } = useCheckStaticFileExist( src );

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        src: dataImg = src,
        size: dataSize = size,
        fittingMode: dataFittingMode = fittingMode
    } = data;

    const combinedClassName = `${styles["image"]} ${dataClassName}`;
    const { xSize, ySize } = dataSize || {};

    return (

        <img
            // src={ fileExists ? dataImg : getNoImage() }
            src={ dataImg }
            id={dataId} className={combinedClassName}
            style={{ ...dataStyle, width: xSize, height: ySize, objectFit: dataFittingMode }}
            >
        </img>

    )
}

export { Image };