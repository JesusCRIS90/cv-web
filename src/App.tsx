import { useContext, useEffect, useState, Dispatch, SetStateAction } from "react";

import { RESULT_STATE } from "./hooks/useLoadJSONFile";

import NavBar from "./components/NavBar/NavBar";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";



import { load_SVG_Sprites_Sheet } from "./utils/utilities";
import { COMMON_ICONS_URL, SOCIAL_NETWORK_ICONS_URL, TECH_ICONS_URL } from "./utils/globalInfo";


import { ContextStore } from './context/ContextManagerProvider'
import { Manager } from "./context/managers";
import { Separator } from "./components/Layouts";



export interface IReRenderAppComponent {
  (): void;
}

export type AppStateDispatch = Dispatch<SetStateAction<RESULT_STATE>>;

function App() {

  const { appManager } = useContext(ContextStore);
  const [state, setState] = useState<RESULT_STATE>(RESULT_STATE.LOADING);


  useEffect(() => {
    load_SVG_Sprites_Sheet(COMMON_ICONS_URL, "common-sprites-sheet");
    load_SVG_Sprites_Sheet(SOCIAL_NETWORK_ICONS_URL, "soial-network-sprites-sheet");
    load_SVG_Sprites_Sheet(TECH_ICONS_URL, "tech-sprites-sheet");
  }, []);

  useEffect(() => {

    if (!appManager.hasContext("DISPATCHER-APP-STATE")) {

      const dispatchAppState = new Manager<AppStateDispatch>(setState);
      appManager.addContext<AppStateDispatch>("DISPATCHER-APP-STATE", dispatchAppState);

      // console.log("[APP]: Inserting Dispatcher app-state");
    }


  }, [])


  // console.log("APP")

  // if (state === RESULT_STATE.LOADING) {
  //   return <div>Loading...</div>;
  // }

  if (state === (RESULT_STATE.ERROR) || undefined) {
    return <div>Create a Error Page Here</div>;
  }

  return (
    <>
      <HomeSection />
      <AboutSection />
      <Separator length={50} id="app-separators"/>
      <PortfolioSection />
      <Separator length={50} id="end-separators"/>
      <NavBar />
    </>
  );
}

export default App;
