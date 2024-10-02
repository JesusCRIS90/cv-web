import { 
    CSSProperties, 
    useEffect, 
    useState, 
    PropsWithChildren, 
    FC, 
    ReactElement, 
} from 'react'

import { CardProps } from '../Card/Card'

import styles from "./ResponsiveCardGrid.module.css"



// ------------------------------------------

interface MinMaxWidth {
    min: number,
    max: number,
}

interface CommonProps extends PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
}

export interface ResponsiveCardGridProps extends CommonProps {
    children?: ReactElement<CardProps> | ReactElement<CardProps>[];
    gap?: number,
}


// ------------------------------------------

function BuildStyle(
    userStyle: CSSProperties,
    gap: number,
    MinMax: MinMaxWidth,
): CSSProperties {


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



const ResponsiveCardGrid: FC<ResponsiveCardGridProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    gap = 0,
}) => {

    const [MinMaxWidth, setMinMaxWidth] = useState<MinMaxWidth>({ max: 0, min: 0 });

    useEffect(() => {

        let childArray: ReactElement<CardProps>[] = [];

        // Ensure children is an array, even if it's a single element or undefined/null
        if (Array.isArray(children)) {
            childArray = children;
        } else if (children) {
            childArray = [children];
        }

        // console.log("[RESPONSIVE-GRID]", childArray, children);

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

    // console.log('RESPONSIVE-CARD-GRID', Array.isArray(children) ? children.length : 1, children, MinMaxWidth);

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