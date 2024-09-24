import React from 'react'

import { ActionIcon, LinkIconList } from "../../../components"
import { HorizontalLayout } from "../../Layouts"

import { iContact } from "../../../interfaces"

import styles from "./ContactBar.module.css"


export interface ContactProps {
    ObjData: iContact | undefined,
}

const ContactBar: React.FC<ContactProps> = ({
    ObjData = undefined
}) => {

    if( ObjData === undefined ){
        return <></>
    }

    const { actionIcon, linkIcons } = ObjData;


    return (

        <HorizontalLayout className={`${styles['contact-bar-layout']}`}>

            <LinkIconList linkIconList={linkIcons} />
            <ActionIcon name={actionIcon.name}/>

        </HorizontalLayout>
    )
}

export { ContactBar }



// iContact
