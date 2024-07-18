import NavBar from "./components/NavBar/NavBar";

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
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <NavBar />
    </>
  );
}

export default App;
