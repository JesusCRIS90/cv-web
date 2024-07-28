import NavBar from "./components/NavBar/NavBar";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";
import { ViteExPage } from "./pages/";

function App() {

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
