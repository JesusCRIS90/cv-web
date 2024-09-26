import { CSSProperties, ReactElement, FC, Dispatch, SetStateAction, PropsWithChildren } from 'react'


import styles from "./BubbleFilter.module.css"
import { HorizontalLayout } from '../../../Layouts';


// ------------------------------------------

interface CommonProps extends PropsWithChildren {
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
    filterDispatcher: Dispatch<SetStateAction<string>>;
}

interface ComponentProps extends BubbleFilterProps {
    bubbleFilterObj?: BubbleFilterProps;
    filterDispatcher: Dispatch<SetStateAction<string>>;
}

// ------------------------------------------


const BubbleFilter: FC<ComponentProps> = ({
    id = "",
    className = "",
    style,
    tags,
    bubbleFilterObj,
    filterDispatcher
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        tags: dataTags = tags,

    } = bubbleFilterObj || {};

    const combinedClassName = `${styles['bubble-filter']} ${dataClassName}`;




    // console.log("[ BUBBLE-FILTER ]", dataTags);


    return (
        <HorizontalLayout className={combinedClassName} id={dataId} style={dataStyle}>
            
            {
                (dataTags === undefined)
                    ? <></>
                    : dataTags.map( (item: string) => {
                        return <BubbleFilterItem
                            tag={item}
                            key={item}
                            filterDispatcher={filterDispatcher}
                        />
                    })
            }
            
        </HorizontalLayout>
    )
}

const BubbleFilterItem: FC<BubbleFilterItemProps> = ({
    id = "",
    className = "",
    style,
    tag,
    filterDispatcher
}) => {

    const combinedClassName = `${styles['bubble-filter-item']} ${className}`;

    const updateFilter = () => {
        // TODO: Logic of Filter Updating
        filterDispatcher( tag );
        // console.log("[UPDATING FILTER] - New Filter:", tag);
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