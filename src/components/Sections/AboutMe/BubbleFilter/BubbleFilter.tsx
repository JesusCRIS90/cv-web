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

export interface BubbleFilterState {
    state: string;
    dispatcher: Dispatch<SetStateAction<string>>;
}

export interface BubbleFilterItemProps extends CommonProps {
    tag: string,
    filterState: BubbleFilterState;
}

interface ComponentProps extends BubbleFilterProps {
    bubbleFilterObj?: BubbleFilterProps;
    filterState: BubbleFilterState;
}

// ------------------------------------------


const BubbleFilter: FC<ComponentProps> = ({
    id = "",
    className = "",
    style,
    tags,
    bubbleFilterObj,
    filterState
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        tags: dataTags = tags,

    } = bubbleFilterObj || {};

    const combinedClassName = `${styles['bubble-filter']} ${dataClassName}`;


    return (
        <HorizontalLayout className={combinedClassName} id={dataId} style={dataStyle}>

            {
                (dataTags === undefined)
                    ? <></>
                    : dataTags.map((item: string) => {
                        return <BubbleFilterItem
                            tag={item}
                            key={item}
                            filterState={filterState}
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
    filterState
}) => {

    const activeFilter = filterState.state;

    let combinedClassName = `${styles['bubble-filter-item']} ${className}`;

    if (activeFilter === tag) {
        combinedClassName = `${combinedClassName} ${styles['filter-active']}`;
    }


    const updateFilter = () => {
        filterState.dispatcher(tag);
    }


    return (
        <>
            <div
                onClick={updateFilter}
                className={combinedClassName}
                id={id} style={style}>
                {tag}
            </div>
        </>
    )
}

export { BubbleFilter }