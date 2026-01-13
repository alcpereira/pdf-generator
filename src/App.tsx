import { getTheme } from "./themes";
import config from "../configs/base.config";

function App() {
  const ThemeComponent = getTheme("classic");
  return <ThemeComponent config={config} />;
}

export default App;
