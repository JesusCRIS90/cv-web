import React, { CSSProperties, ReactElement } from 'react'
import { 
    POLICY_STANDART_POSITION, 
} from "../../../utils/enums"

import styles from "./GridLayout2D.module.css"

interface StringVec2D {
    x: string,
    y: string,
}

interface BaseProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
    groupPolicyPos?: POLICY_STANDART_POSITION,
    gap?: number,
}

interface GridLayout2DProps extends BaseProps {
    distribution: StringVec2D,
    data?: BaseProps;
}

export class GridLayout2DPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            children: options.children,
            id: options.id,
            className: options.className,
            style: options.style,
            groupPolicyPos: options.groupPolicyPos,
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

function BuildGridDistribution( 
    styleObj: React.CSSProperties, 
    input: StringVec2D 
    ) : CSSProperties 
{

    let newStyleObject = { ...styleObj };

    newStyleObject = { 
        ...newStyleObject,
        gridTemplateColumns: GridInterpretation( input.x ),
        gridTemplateRows: GridInterpretation( input.y )
    }

    return newStyleObject;
}

function BuildStylePositionLayout( 
    userStyle: React.CSSProperties,
    input: StringVec2D,
    groupPolicyPos: POLICY_STANDART_POSITION,
    Gap: number
    ): React.CSSProperties
{

    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...BuildGridDistribution( newCustomStyle, input ) }
    newCustomStyle = { ...BuildGroupPolicy( newCustomStyle, groupPolicyPos, Gap ) }

    return newCustomStyle;
}

const GridLayout2D: React.FC<GridLayout2DProps> = ({
    children,
    distribution,
    id = "",
    className = "",
    style = {},
    groupPolicyPos = POLICY_STANDART_POSITION.CENTER_CENTER,
    gap = 0,
    data = {}
}) => {

    const {
        children: dataChildren = children,
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        groupPolicyPos: dataGroupPolicy = groupPolicyPos,
        gap: dataGap = gap,
    } = data;

    const combinedClassName = `${styles["grid-layout-2d-horizontal"]} ${dataClassName}`;
    
    const combinedStyle = BuildStylePositionLayout( dataStyle, distribution, dataGroupPolicy, dataGap );

    return (

        <div id={dataId} className={combinedClassName} style={combinedStyle}>
            {dataChildren}
        </div>

    )
}

export { GridLayout2D };