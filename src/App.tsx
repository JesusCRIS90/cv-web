import NavBar from "./components/NavBar/NavBar";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";
import { ViteExPage } from "./pages/";

import useLoadJSONFile from "./hooks/useLoadJSONFile";

function App() {

  const { data, loading, error } = useLoadJSONFile( '../public/cvInfo.json' );

  if (loading) {
    return <div>Loading...</div>;
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
