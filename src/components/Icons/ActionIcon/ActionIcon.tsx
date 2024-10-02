import { CSSProperties, PropsWithChildren, FC, useContext } from 'react'

import styles from "./ActionIcon.module.css"

import { Notyf } from 'notyf';
import { ContextStore } from '../../../context';
import { iContact } from '../../../interfaces';

interface BaseProps extends PropsWithChildren {
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

export const notyf = new Notyf({
    duration: 3000,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'warning',
        background: 'orange',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
      {
        type: 'error',
        background: 'indianred',
        duration: 3000,
        dismissible: true
      }
    ]
  });

const ActionIcon: FC<ActionIconProps> = ({
    name,
    id = "",
    className = "",
    style = {},
    size = 24,
    color = '',
    data = {}
}) => {

    const { appManager } = useContext(ContextStore);
    const contactData = appManager.getContext<iContact>("CONTACT")?.getData();

    const {
        id: dataId = id,
        className: dataClassName = className,
        style: dataStyle = style,
        size: dataSize = size,
        color: dataColor = color,
    } = data;

    const combinedClassName = `${styles["action-icon"]} ${dataClassName}`;


    const action_onClick = () => {
        const email = contactData?.actionIcon.tooltip;

        if( email !== undefined ){
            email2Clipboard(email);
        } else{
            notyf.error( "Error Copy Email to Clipboard.\n Please try Later" );
        }

    }

    const email2Clipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                notyf.success( "Email Copied to CLIPBOARD!" );
            })
            .catch(() => {
                notyf.error( "Error Copy Email to Clipboard. Please try again later" );
            });
    };

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