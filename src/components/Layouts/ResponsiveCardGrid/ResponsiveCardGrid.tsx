import React, { CSSProperties, useEffect, useState } from 'react'

import { CardProps } from '../Card/Card'

import styles from "./ResponsiveCardGrid.module.css"



// ------------------------------------------

interface MinMaxWidth {
    min: number,
    max: number,
}

interface CommonProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface ResponsiveCardGridProps extends CommonProps {
    children?: React.ReactElement<CardProps> | React.ReactElement<CardProps>[];
    gap?: number,
}


// ------------------------------------------

function BuildStyle(
    userStyle: React.CSSProperties,
    gap: number,
    MinMax: MinMaxWidth,
): React.CSSProperties {


    const gridStyle = {
        '--gap-width': `${gap}px`,
        '--min-card-width': `${MinMax.min}px`,
        '--max-card-width': `${MinMax.max}px`
    } as CSSProperties;

    let Style = {
        ...userStyle,
        ...gridStyle
    }

    return Style;
}



const ResponsiveCardGrid: React.FC<ResponsiveCardGridProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    gap = 0,
}) => {

    const [MinMaxWidth, setMinMaxWidth] = useState<MinMaxWidth>({ max: 0, min: 0 });

    useEffect(() => {

        let childArray: React.ReactElement<CardProps>[] = [];

        // Ensure children is an array, even if it's a single element or undefined/null
        if (Array.isArray(children)) {
            childArray = children;
        } else if (children) {
            childArray = [children];
        }

        if (childArray.length > 0) {

            // Calculate min and max card widths based on the children props
            const minWidthArray = childArray.map(child => child.props.minWidth);
            const maxWidthArray = childArray.map(child => child.props.maxWidth);

            setMinMaxWidth({
                max: Math.max(...maxWidthArray),
                min: Math.min(...minWidthArray),
            })

        }

    }, [children]);

    const combinedClassName = `${styles['responsive-card-grid']} ${className}`;

    console.log('RESPONSIVE-CARD-GRID', Array.isArray(children) ? children.length : 1, children, MinMaxWidth);

    // Avoiding Render a empty div if there is no children
    if( children === undefined ) {
        return <></>
    }

    return (
        <div className={combinedClassName} id={id} style={BuildStyle(style, gap, MinMaxWidth)}>
            {children}
        </div>
    )
}

export { ResponsiveCardGrid }