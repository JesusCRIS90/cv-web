import { ViteExPage } from "./pages/";
import { sections } from "./utils/globalInfo";
import FixedSectionController from "./components/FixedSectionController/FixedSectionController";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";

import { CalculateYScroll } from "./utils/utilities";

function App() {
  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    console.clear();
    console.log("Wheel event detected!");
    console.log("DeltaY:", event.deltaY); // The amount the wheel has been scrolled

    // TODO: USE IntersectionObserver API
    const sectionsWidth = {
      home: document.getElementById("home")?.clientWidth,
      about: document.getElementById("about")?.clientWidth,
      portfolio: document.getElementById("portfolio")?.clientWidth,
    };

    const sectionsRanges = {
      home: sectionsWidth.home,
      about: sectionsWidth.home + sectionsWidth.about,
      portfolio:
        sectionsWidth.home + sectionsWidth.about + sectionsWidth.portfolio,
    };

    const wheelData = CalculateYScroll(event);

    console.log(sectionsWidth, sectionsRanges);
    console.log(event);
    console.log(wheelData);
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
