import React, { CSSProperties } from 'react'

import styles from "./ActionIcon.module.css"

interface BaseProps extends React.PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties,
    size?: number;
    color?: string;
}

interface ActionIconProps extends BaseProps {
    name: string;
    data?: BaseProps;
}

export class ActionIconPropsBuilder {

    static build(
        options: Partial<BaseProps> = {}
    ) {
        return {
            id: options.id,
            className: options.className,
            style: options.style,
            size: options.size,
            color: options.color,
        };
    }
}

const ActionIcon: React.FC<ActionIconProps> = ({
    name,
    id = "",
    className = "",
    style = {},
    size = 24,
    color = '',
    data = {}
}) => {

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        size: dataSize = size,
        color: dataColor = color,
    } = data;

    const combinedClassName = `${styles["action-icon"]} ${dataClassName}`;

    // TODO: custom the action to execute
    const action_onClick = () => {
        console.log("[ACTION-ICON]", "Executing Action");
    }

    return (
        <div onClick={action_onClick}>
            <svg
                id={dataId} className={combinedClassName} style={dataStyle}
                width={dataSize} height={dataSize} fill={dataColor}
            >
                <use xlinkHref={`#${name}`} />
            </svg>
        </div>

    )
}

export { ActionIcon };