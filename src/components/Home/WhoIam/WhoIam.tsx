import React from 'react'


import styles from "./WhoIam.module.css"
import { VerticalLayout } from '../../Layouts';
import { SingleText, Tittle } from '../../Typography';
import { ContactBar } from '../../Contact/ContactBar/ContactBar';
import { TYPOGRAPHY_LEVEL } from '../../../utils/enums';

interface TextWithKeywords {
    text: string;
    keywords: string[];
}

interface Contact {
    actionIcon: ActionIcon;
    linkIcons: LinkIcon[];
}

interface ActionIcon {
    iconName: string;
    action: string;
}

interface LinkIcon {
    iconName: string;
    link: string;
}

interface BaseProps extends React.PropsWithChildren {
    Name?: TextWithKeywords;
    Role?: TextWithKeywords;
    BriefIntro?: TextWithKeywords;
    Contact?: Contact;
    ProfileImage?: string;
}

export interface HomeProps extends BaseProps {
    Home?: BaseProps;
}


const WhoIam: React.FC<HomeProps> = ({
    Name,
    Role,
    BriefIntro,
    Contact,
    ProfileImage,
    Home
}) => {

    const {
        Name: whoIam_Name = Name || undefined,
        Role: whoIam_Role = Role,
        BriefIntro: whoIam_BriefIntro = BriefIntro,
        Contact: whoIam_Contact = Contact,
        ProfileImage: whoIam_ProfileImage = ProfileImage,
    } = Home || {};


    // console.log("[ CONTACT-BAR ]", contactActionIcon);

    return (

        <VerticalLayout className={`${styles['who-i-am']}`}>

            {
                (whoIam_Name === undefined)
                    ? <></>
                    : <Tittle level={TYPOGRAPHY_LEVEL.LEVEL_1} keywords={whoIam_Name.keywords}>
                        {whoIam_Name.text}
                    </Tittle>
            }

            {
                (whoIam_Role === undefined)
                    ? <></>
                    : <Tittle level={TYPOGRAPHY_LEVEL.LEVEL_1} keywords={whoIam_Role.keywords}>
                        {whoIam_Role.text}
                    </Tittle>
            }

            {
                (whoIam_BriefIntro === undefined)
                    ? <></>
                    : <SingleText keywords={whoIam_BriefIntro.keywords}>
                        {whoIam_BriefIntro.text}
                    </SingleText>
            }

            <ContactBar contact={whoIam_Contact} />
            {/* <ContactBar linkIcons={linkIcons} actionIcon={actionIcon}/> */}



        </VerticalLayout>
    )
}

export { WhoIam }