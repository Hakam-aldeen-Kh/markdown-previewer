import { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Document from "./components/Document";

const App = () => {
  const { handleChange, code, compiled } = useLocalStorage();
  const [activeTab, setActiveTab] = useState(0);

  const textAreaActive = () => {
    if (activeTab === 0) {
      return (
        <div>
          <textarea onChange={handleChange} value={code} />
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div>
          <textarea value={compiled} readOnly />
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div>
          <Document />
        </div>
      );
    }
  };

  return (
    <>
      {/* <Document /> */}
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button
            className={activeTab === 0 ? "btn" : null}
            onClick={() => setActiveTab(0)}
          >
            MarkDown
          </button>
          <button
            className={activeTab === 1 ? "btn" : null}
            onClick={() => setActiveTab(1)}
          >
            Preview
          </button>
          <button
            className={activeTab === 2 ? "btn" : null}
            onClick={() => setActiveTab(2)}
          >
            Docs
          </button>
        </div>
        {textAreaActive()}
      </div>
    </>
  );
};

export default App;
