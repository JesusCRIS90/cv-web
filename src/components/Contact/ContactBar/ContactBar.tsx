import React from 'react'

import { ActionIcon, LinkIconList } from "../../../components"
import { HorizontalLayout } from "../../Layouts"

import styles from "./ContactBar.module.css"

interface ActionIcon {
    iconName: string;
    action: string;
}

interface LinkIcon {
    iconName: string;
    link: string;
}

interface BaseProps extends React.PropsWithChildren {
    actionIcon?: ActionIcon;
    linkIcons?: LinkIcon[];
}

export interface ContactProps extends BaseProps {
    contact?: BaseProps;
}


const ContactBar: React.FC<ContactProps> = ({
    linkIcons,
    actionIcon,
    contact
}) => {

    const {
        linkIcons: contactLinkIcons = linkIcons || [],
        actionIcon: contactActionIcon = actionIcon,
    } = contact || {};

    const iconActionName = ( contactActionIcon === undefined ) ? "" : contactActionIcon.iconName;

    // const mergedLinkIcons = contact?.linkIcons || linkIcons || [];
    // const mergedActionIcons = contact?.actionIcons || actionIcons || [];


    // console.log("[ CONTACT-BAR ]", contactActionIcon);

    return (

        <HorizontalLayout className={`${styles['contact-bar-layout']}`}>

            <LinkIconList linkIconList={contactLinkIcons} />
            <ActionIcon name={iconActionName}/>

        </HorizontalLayout>
    )
}

export { ContactBar }
