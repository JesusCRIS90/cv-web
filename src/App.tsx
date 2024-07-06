import FixedSectionController from "./components/FixedSectionController/FixedSectionController";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";
import { ViteExPage } from "./pages/";

function App() {
  // const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
  //   const secId = InWhichSectionAmI(event);
  //   dispatch(AUpdateCurrentSection(secId));
  //   forceUpdate();
  // };

  return (
    <>
      {/* // <div onWheel={handleWheel}> */}
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <FixedSectionController />
      {/* </div> */}
    </>
  );
}

export default App;
