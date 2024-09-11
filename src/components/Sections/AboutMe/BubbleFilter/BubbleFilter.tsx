import React, { CSSProperties, ReactElement } from 'react'


import styles from "./BubbleFilter.module.css"
import { HorizontalLayout } from '../../../Layouts';


// ------------------------------------------

interface CommonProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface BubbleFilterProps extends CommonProps {
    tags?: string[],
}

export interface BubbleFilterItemProps extends CommonProps {
    tag: string,
}

interface ComponentProps extends BubbleFilterProps {
    bubbleFilterObj?: BubbleFilterProps;
}

// ------------------------------------------


const BubbleFilter: React.FC<ComponentProps> = ({
    id = "",
    className = "",
    style,
    tags,
    bubbleFilterObj
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        tags: dataTags = tags,

    } = bubbleFilterObj || {};

    const combinedClassName = `${styles['bubble-filter']} ${dataClassName}`;




    console.log("[ BUBBLE-FILTER ]", dataTags);


    return (
        <HorizontalLayout className={combinedClassName} id={dataId} style={dataStyle}>
            
            {
                (dataTags === undefined)
                    ? <></>
                    : dataTags.map( (item: string) => {
                        return <BubbleFilterItem
                            tag={item}
                            key={item}
                        />
                    })
            }
            
        </HorizontalLayout>
    )
}

const BubbleFilterItem: React.FC<BubbleFilterItemProps> = ({
    id = "",
    className = "",
    style,
    tag,
}) => {

    const combinedClassName = `${styles['bubble-filter-item']} ${className}`;

    const updateFilter = () => {
        // TODO: Logic of Filter Updating
        console.log("[UPDATING FILTER] - New Filter:", tag);
    }

    return (
        <>
            <div 
                onClick={ updateFilter }
                className={combinedClassName} 
                id={id} style={style}>
                {tag}
            </div>
        </>
    )
}

export { BubbleFilter }