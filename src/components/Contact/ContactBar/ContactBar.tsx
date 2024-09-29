import { FC } from 'react'

import { ActionIcon, LinkIconList } from "../../../components"
import { HorizontalLayout } from "../../Layouts"

import { iContact } from "../../../interfaces"

import styles from "./ContactBar.module.css"


export interface ContactProps {
    ObjData: iContact | undefined,
}

const ContactBar: FC<ContactProps> = ({
    ObjData = undefined
}) => {

    if( ObjData === undefined ){
        return <></>
    }

    const { actionIcon, linkIcons } = ObjData;


    return (

        <HorizontalLayout className={`${styles['contact-bar-layout']}`}>

            <LinkIconList linkIconList={linkIcons} className={styles['contact-bar-icon']}/>
            <ActionIcon name={actionIcon.name} className={styles['contact-bar-action-icon']}/>

        </HorizontalLayout>
    )
}

export { ContactBar }



// iContact
