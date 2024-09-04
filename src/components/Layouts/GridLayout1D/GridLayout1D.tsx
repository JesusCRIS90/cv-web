import React, { CSSProperties, ReactElement } from 'react'
import { 
    POLICY_STANDART_POSITION, 
    POLICY_ORIENTATION
} from "../../../utils/enums"

import styles from "./GridLayout1D.module.css"


interface BaseProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
    groupPolicyPos?: POLICY_STANDART_POSITION,
    orientation?: POLICY_ORIENTATION,
    gap?: number,
}

interface GridLayout1DProps extends BaseProps {
    distribution: string,
    data?: BaseProps;
}

export class GridLayout1DPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            children: options.children,
            id: options.id,
            className: options.className,
            style: options.style,
            groupPolicyPos: options.groupPolicyPos,
            orientation: options.orientation,
            gap: options.gap
        };
    }
}

function BuildGroupPolicy( 
    userCustomStyle: React.CSSProperties, 
    groupPolicyPos: POLICY_STANDART_POSITION, 
    Gap: number
    ): CSSProperties 
{

    const gridGap: string = `${Gap}px`;

    let alignItems: string;
    let justifyItems: string;

    switch (groupPolicyPos) {

        case POLICY_STANDART_POSITION.TOP_LEFT:
            alignItems = "start";
            justifyItems = "start";
            break;

        case POLICY_STANDART_POSITION.TOP_CENTER:
            alignItems = "start";
            justifyItems = "center";
            break;

        case POLICY_STANDART_POSITION.TOP_RIGHT:
            alignItems = "start";
            justifyItems = "end";
            break;

        case POLICY_STANDART_POSITION.CENTER_LEFT:
            alignItems = "center";
            justifyItems = "start";
            break;

        case POLICY_STANDART_POSITION.CENTER_CENTER:
            alignItems = "center";
            justifyItems = "center";
            break;

        case POLICY_STANDART_POSITION.CENTER_RIGHT:
            alignItems = "center";
            justifyItems = "end";
            break;

        case POLICY_STANDART_POSITION.BOTTOM_LEFT:
            alignItems = "end";
            justifyItems = "start";
            break;

        case POLICY_STANDART_POSITION.BOTTOM_CENTER:
            alignItems = "end";
            justifyItems = "center";
            break;

        case POLICY_STANDART_POSITION.BOTTOM_RIGHT:
            alignItems = "end";
            justifyItems = "end";
            break;

        default:
            alignItems = "center";
            justifyItems = "center";
    }

    // return { alignItems, justifyContent, gridGap,...userCustomStyle };
    return { ...userCustomStyle, gridGap, alignItems, justifyItems };

}

function GridInterpretation( input: string ){
    
    let newInput = input;

    // TODO: Make the interpretation function
    // Write code here
    
    return newInput;
}

function StyleOrientation( 
    styleObj: React.CSSProperties, 
    orientation: POLICY_ORIENTATION, 
    input: string 
    ) : CSSProperties 
{

    let newStyleObject = { ...styleObj };

    switch (orientation) {
        
        case POLICY_ORIENTATION.HORIZONTAL:
            
            newStyleObject = { 
                ...newStyleObject,
                gridTemplateColumns: GridInterpretation( input )
            }

            break;

    
        case POLICY_ORIENTATION.VERTICAL:
            
            newStyleObject = { 
                ...newStyleObject,
                gridTemplateRows: GridInterpretation( input )
            }

            break;
        
        default:

            newStyleObject = { 
                ...newStyleObject,
                gridTemplateRows: GridInterpretation( input )
            }

            break;
    }

    return newStyleObject;


}

function BuildStylePositionLayout( 
    userStyle: React.CSSProperties,
    orientation: POLICY_ORIENTATION,
    input: string,
    groupPolicyPos: POLICY_STANDART_POSITION,
    Gap: number
    ): React.CSSProperties
{

    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...StyleOrientation( newCustomStyle, orientation, input ) }
    newCustomStyle = { ...BuildGroupPolicy( newCustomStyle, groupPolicyPos, Gap ) }

    return newCustomStyle;
    // return BuildGroupPolicy( StyleOrientation( userStyle, orientation, input ), groupPolicyPos, Gap );
}

const GridLayout1D: React.FC<GridLayout1DProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    distribution,
    groupPolicyPos = POLICY_STANDART_POSITION.CENTER_CENTER,
    gap = 0,
    orientation = POLICY_ORIENTATION.HORIZONTAL,
    data = {}
}) => {

    const {
        children: dataChildren = children,
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        groupPolicyPos: dataComPos = groupPolicyPos,
        gap: dataGap = gap,
        orientation: dataOrientation = orientation
    } = data;

    const combinedClassName = `${styles["grid-layout-1d-horizontal"]} ${dataClassName}`;
    
    const combinedStyle = BuildStylePositionLayout( dataStyle, dataOrientation, distribution, dataComPos, dataGap );

    return (

        <div id={dataId} className={combinedClassName} style={combinedStyle}>
            {dataChildren}
        </div>

    )
}

export { GridLayout1D };