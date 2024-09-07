import React, { useContext, useEffect } from "react";

import useLoadJSONFile, { RESULT_STATE } from "./hooks/useLoadJSONFile";

import NavBar from "./components/NavBar/NavBar";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";
import { ViteExPage } from "./pages/";


import { load_SVG_Sprites_Sheet } from "./utils/utilities";
import { COMMON_ICONS_URL, SOCIAL_NETWORK_ICONS_URL, TECH_ICONS_URL } from "./utils/globalInfo";
import { DataContext } from "./context/DataProvider";


function App() {
  
  const { state, data } = useContext( DataContext );

  useEffect(() => {
    load_SVG_Sprites_Sheet(COMMON_ICONS_URL, "common-sprites-sheet");
    load_SVG_Sprites_Sheet(SOCIAL_NETWORK_ICONS_URL, "soial-network-sprites-sheet");
    load_SVG_Sprites_Sheet(TECH_ICONS_URL, "tech-sprites-sheet");
  }, []);

  if (state === RESULT_STATE.LOADING) {
    return <div>Loading...</div>;
  }

  if (state === RESULT_STATE.ERROR) {
    return <div>Create a Error Page Here</div>;
  }

  return (
    <>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <NavBar />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
