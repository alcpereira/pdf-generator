import config from "../configs/base.config";
import "./App.css";

import Category from "~/components/Category/Category";
import Header from "~/components/Header/Header";
import Profile from "~/components/Profile/Profile";

function App() {
  return (
    <div className="app__container">
      <Header name={config.header.name} resume={config.header.resume} />
      <div className="app__body">
        <div
          className="app__body-left"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {config.workExperience && config.workExperience.length > 0 && (
            <Category data={config.workExperience} />
          )}
          {config.projects && config.projects.length > 0 && (
            <Category data={config.projects} />
          )}
        </div>
        <div className="app__body-right">
          <Profile data={config} />
        </div>
      </div>
    </div>
  );
}

export default App;
