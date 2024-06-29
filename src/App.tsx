import { ViteExPage } from "./pages/";
import { sections } from "./utils/globalInfo";
import FixedSectionController from "./components/FixedSectionController/FixedSectionController";

function App() {
  return (
    <>
      {/* <ViteExPage /> */}
      <FixedSectionController sections={sections} />
    </>
  );
}

export default App;
