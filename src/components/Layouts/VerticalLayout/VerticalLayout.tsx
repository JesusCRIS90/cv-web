import React, { CSSProperties, ReactElement } from 'react'
import { POLICY_VERTICAL_POSITION } from "../../../utils/enums"

import styles from "./VerticalLayout.module.css"


interface BaseProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
    groupPolicyPos?: POLICY_VERTICAL_POSITION
    gap?: number,
}

interface VerticalLayoutProps extends BaseProps {
    data?: BaseProps;
}

export class VerticalLayoutPropsBuilder {

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

function BuildCustomStyle(groupPolicyPos: POLICY_VERTICAL_POSITION, Gap: number, userCustomStyle: Object): CSSProperties {

    let alignItems: string;
    let justifyContent: string;
    let alignContent: string;
    let flexWrap: CSSProperties["flexWrap"] = "nowrap"; // Default value to prevent undefined
    const gap: string = `${Gap}px`;

    switch (groupPolicyPos) {

        case POLICY_VERTICAL_POSITION.LEFT_LEFT:
            alignItems = "flex-start";   // Align left horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case POLICY_VERTICAL_POSITION.LEFT_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case POLICY_VERTICAL_POSITION.LEFT_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case POLICY_VERTICAL_POSITION.CENTER_LEFT:
            alignItems = "flex-start";    // Align left horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case POLICY_VERTICAL_POSITION.CENTER_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case POLICY_VERTICAL_POSITION.CENTER_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case POLICY_VERTICAL_POSITION.RIGHT_LEFT:
            alignItems = "flex-start";    // Align left horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        case POLICY_VERTICAL_POSITION.RIGHT_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        case POLICY_VERTICAL_POSITION.RIGHT_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        default:
            alignItems = "center";
            justifyContent = "center";
            alignContent = "center";
            flexWrap = "wrap";
            break;
    }

    return { alignItems, justifyContent, flexWrap, alignContent, gap, ...userCustomStyle };

}


const VerticalLayout: React.FC<VerticalLayoutProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    groupPolicyPos = POLICY_VERTICAL_POSITION.CENTER_CENTER,
    gap = 0,
    data = {}
}) => {

    const {
        children: dataChildren = children,
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        groupPolicyPos: dataComPos = groupPolicyPos
    } = data;

    const combinedClassName = `${styles["vertical-layout"]} ${dataClassName}`;
    const combinedStyle = BuildCustomStyle(dataComPos, gap, dataStyle);

    return (

        <div id={dataId} className={combinedClassName} style={combinedStyle}>
            {dataChildren}
        </div>

    )
}

export { VerticalLayout };