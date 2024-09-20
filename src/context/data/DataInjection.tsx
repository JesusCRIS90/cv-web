import React, { ReactNode, useContext, useEffect, useState } from 'react'

import useLoadJSONFile, { RESULT_STATE } from '../../hooks/useLoadJSONFile';
import useForceRender from '../../hooks/useForceRender';

import { Manager } from '../managers';
import { ContextStore } from '../ContextManagerProvider';

import { WhoIamAdaptor, ContactAdaptor, ProfileImageAdaptor } from "../../adaptors"
import { iWhoIAm, iContact, iProfileImage } from '../../interfaces';
import { AppStateDispatch } from '../../App';



// ------------------------------------------

interface DataInjectionProps {
    children: ReactNode;
}


const DataInjection = ({ children }: DataInjectionProps) => {

    const { appManager } = useContext(ContextStore);
    const { data, state } = useLoadJSONFile('../db/cvInfo.json');

    const [injected, setInjected] = useState(false);


    useEffect(() => {
        
        if ( injected ) {
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
            const { Home, Contact } = data;
            const { WhoIam, ProfileImage } = Home;

            const whoIam = new Manager<iWhoIAm>(WhoIamAdaptor(WhoIam));
            appManager.addContext<iWhoIAm>("WHO-I-AM", whoIam);

            const profileImage = new Manager<iProfileImage>(ProfileImageAdaptor(ProfileImage));
            appManager.addContext<iProfileImage>("PROFILE-IMAGE", profileImage);

            const contact = new Manager<iContact>(ContactAdaptor(Contact));
            appManager.addContext<iContact>("CONTACT", contact);

            // Updating RESULT STATE
            appManager.getContext<RESULT_STATE>("DATA-STATE")?.setData(state);
            
            // Set Flag TRUE => Data Inyected
            setInjected( true );
        
            console.log("DATA INJECTED CORRECTLY", injected);            
        }

    }, [state, injected]);

    useEffect( () => {

        if ( injected ){
            const dispactherAppState = appManager.getContext<AppStateDispatch>("DISPATCHER-APP-STATE")?.getData();

            if ( dispactherAppState !== undefined ){
                // Triggering a Render on App Component, due to the fact that we are change its State (useState)
                dispactherAppState( RESULT_STATE.SUCCESS );
                console.log("[DATA-INJECTED]: App Component Updated State");
            } else {
                console.log("[DATA-INJECTED]: AppState Dispatcher Manager Empty")
            }  

        }
    }, [injected] );



    console.log("DataInjection", injected);

    return (
        <>
            {children}
        </>
    )
}

export { DataInjection };