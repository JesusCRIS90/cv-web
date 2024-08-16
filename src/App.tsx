import React, { useEffect } from "react";

import useLoadJSONFile, { RESULT_STATE } from "./hooks/useLoadJSONFile";

import NavBar from "./components/NavBar/NavBar";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";
import { ViteExPage } from "./pages/";


import { load_SVG_Sprites_Sheet } from "./utils/utilities";
import { SVG_URL } from "./utils/globalInfo";


function App() {

  const { data, state } = useLoadJSONFile('../public/db/cvInfo.json');

  useEffect(() => {
    load_SVG_Sprites_Sheet(SVG_URL, "svg-sprite-sheet");
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
