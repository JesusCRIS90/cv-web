import React, { CSSProperties, ReactElement } from 'react'
import { POLICY_POSITION } from "../../../utils/enums"

import styles from "./HorizontalLayout.module.css"


interface BaseProps extends React.PropsWithChildren {
    children?: ReactElement | ReactElement[],
    id?: string,
    className?: string,
    style?: CSSProperties,
    groupPolicyPos?: POLICY_POSITION
    gap?: number,
}

interface HorizontalLayoutProps extends BaseProps {
    data?: BaseProps;
}

export class HorizontalLayoutPropsBuilder {

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

function BuildCustomStyle(groupPolicyPos: POLICY_POSITION, Gap: number, userCustomStyle: Object): CSSProperties {

    let alignItems: string;
    let justifyContent: string;
    const gap: string = `${Gap}px`;

    switch (groupPolicyPos) {

        case POLICY_POSITION.TOP_LEFT:
            alignItems = "flex-start";
            justifyContent = "flex-start";
            break;

        case POLICY_POSITION.TOP_CENTER:
            alignItems = "flex-start";
            justifyContent = "center";
            break;

        case POLICY_POSITION.TOP_RIGHT:
            alignItems = "flex-start";
            justifyContent = "flex-end";
            break;

        case POLICY_POSITION.CENTER_LEFT:
            alignItems = "center";
            justifyContent = "flex-start";
            break;

        case POLICY_POSITION.CENTER_CENTER:
            alignItems = "center";
            justifyContent = "center";
            break;

        case POLICY_POSITION.CENTER_RIGHT:
            alignItems = "center";
            justifyContent = "flex-end";
            break;

        case POLICY_POSITION.BOTTOM_LEFT:
            alignItems = "flex-end";
            justifyContent = "flex-start";
            break;

        case POLICY_POSITION.BOTTOM_CENTER:
            alignItems = "flex-end";
            justifyContent = "center";
            break;

        case POLICY_POSITION.BOTTOM_RIGHT:
            alignItems = "flex-end";
            justifyContent = "flex-end";
            break;

        default:
            alignItems = "center";
            justifyContent = "center";
    }

    return { alignItems, justifyContent, gap,...userCustomStyle };

}


const HorizontalLayout: React.FC<HorizontalLayoutProps> = ({
    children,
    id = "",
    className = "",
    style = {},
    groupPolicyPos = POLICY_POSITION.CENTER_CENTER,
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

    const combinedClassName = `${styles["horizontal-layout"]} ${dataClassName}`;
    const combinedStyle = BuildCustomStyle(dataComPos, gap, dataStyle);

    return (

        <div id={dataId} className={combinedClassName} style={combinedStyle}>
            {dataChildren}
        </div>

    )
}

export { HorizontalLayout };