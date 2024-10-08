import data from "./data.ts";
// import data from "./data.json";
import "./App.css";

import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app__container">
      <Header name={} resume={data.header.resume} />
      {/* <Header name={data.header.name} resume={data.header.resume} /> */}
      <div className="app__body">
        <div
          className="app__body-left"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Category data={data.workExperience} />
          <Category data={data.projects} />
        </div>
        <div className="app__body-right">
          <Profile data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
