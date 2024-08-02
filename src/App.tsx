import NavBar from "./components/NavBar/NavBar";

import { HomeSection, AboutSection, PortfolioSection } from "./sections";
import { ViteExPage } from "./pages/";

import useLoadJSONFile, {RESULT_STATE} from "./hooks/useLoadJSONFile";


function App() {

  const { data, state } = useLoadJSONFile( '../public/cvInfo.json' );

  if ( state === RESULT_STATE.LOADING ) {
    return <div>Loading...</div>;
  }

  if ( state === RESULT_STATE.ERROR ) {
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
