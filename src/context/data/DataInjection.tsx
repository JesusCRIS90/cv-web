import { ReactNode, useContext, useEffect, useState } from 'react'

import useLoadJSONFile, { RESULT_STATE } from '../../hooks/useLoadJSONFile';

import { Manager } from '../managers';
import { ContextStore } from '../ContextManagerProvider';

import { 
    WhoIamAdaptor, 
    ContactAdaptor, 
    ProfileImageAdaptor,
    BriefBioAdaptor,
    ExperienceAdaptor,
    SummaryAdaptor,
    SkillsAdaptor,
    PortfolioAdaptor
} from "../../adaptors"
import { iWhoIAm, iContact, iProfileImage, iBio, iSummaries, iExperiences, iSkills, iPortfolio } from '../../interfaces';
import { AppStateDispatch } from '../../App';
// import { BriefBioAdaptor, ExperienceAdaptor, SummaryAdaptor } from '../../adaptors/dataAdaptors';



// ------------------------------------------

interface DataInjectionProps {
    children: ReactNode;
}


const DataInjection = ({ children }: DataInjectionProps) => {

    const { appManager } = useContext(ContextStore);
    const { data, state } = useLoadJSONFile('../db/cvInfo.json');

    const [injected, setInjected] = useState(false);


    useEffect(() => {

        if (injected) {
            console.log("[DATA ALREADY INJECTED]")
            return;
        }

        if (!appManager.hasContext("DATA-STATE")) {

            const dataState = new Manager<RESULT_STATE>(state);
            appManager.addContext<RESULT_STATE>("DATA-STATE", dataState);
            console.log("[Creating DATA-STATE]");
        }

        if (state === RESULT_STATE.SUCCESS && data !== null) {

            // Data Inyection
            const { Home, Contact, About, Portfolio } = data;
            const { WhoIam, ProfileImage } = Home;
            const { BriefBio, Experience, Skills, Summary } = About;

            console.log("[DATA-INJECTION]", data);

            // Home Section Data
            const whoIam = new Manager<iWhoIAm>(WhoIamAdaptor(WhoIam));
            appManager.addContext<iWhoIAm>("WHO-I-AM", whoIam);

            const profileImage = new Manager<iProfileImage>(ProfileImageAdaptor(ProfileImage));
            appManager.addContext<iProfileImage>("PROFILE-IMAGE", profileImage);

            const contact = new Manager<iContact>(ContactAdaptor(Contact));
            appManager.addContext<iContact>("CONTACT", contact);

            // About Section Data
            const bio  = new Manager<iBio>(BriefBioAdaptor(BriefBio));
            appManager.addContext<iBio>("BRIEF-BIO", bio);

            const summaries  = new Manager<iSummaries>(SummaryAdaptor(Summary));
            appManager.addContext<iSummaries>("SUMMARY", summaries);

            const experience  = new Manager<iExperiences>(ExperienceAdaptor(Experience));
            appManager.addContext<iExperiences>("EXPERIENCE", experience);

            const skills  = new Manager<iSkills>(SkillsAdaptor(Skills));
            appManager.addContext<iSkills>("SKILLS", skills);

            // Portfolio Section Data
            const portfolio  = new Manager<iPortfolio>(PortfolioAdaptor(Portfolio));
            appManager.addContext<iPortfolio>("PORTFOLIO", portfolio);

            // Updating RESULT STATE
            appManager.getContext<RESULT_STATE>("DATA-STATE")?.setData(state);

            // Set Flag TRUE => Data Inyected
            setInjected(true);

            console.log("DATA INJECTED CORRECTLY", injected);
        }

    }, [state, injected]);

    useEffect(() => {

        if (injected) {
            const dispactherAppState = appManager.getContext<AppStateDispatch>("DISPATCHER-APP-STATE")?.getData();

            if (dispactherAppState !== undefined) {
                // Triggering a Render on App Component, due to the fact that we are change its State (useState)
                dispactherAppState(RESULT_STATE.SUCCESS);
                console.log("[DATA-INJECTED]: App Component Updated State");
            } else {
                console.log("[DATA-INJECTED]: AppState Dispatcher Manager Empty")
            }

        }
    }, [injected]);



    console.log("DataInjection", injected);

    return (
        <>
            {children}
        </>
    )
}

export { DataInjection };