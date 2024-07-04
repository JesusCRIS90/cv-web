import { ViteExPage } from "./pages/";
import { sections } from "./utils/globalInfo";
import FixedSectionController from "./components/FixedSectionController/FixedSectionController";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";
import { InWhichSectionAmI } from "./utils/utilities";

function App() {
  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    console.clear();

    const secId = InWhichSectionAmI(event);
    console.log(
      `Wheel event detected! - DeltaY: ${event.deltaY} - Current Section ${secId}`
    );
  };

  return (
    <div onWheel={handleWheel}>
      {/* <ViteExPage /> */}
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <FixedSectionController sections={sections} />
    </div>
  );
}

export default App;
