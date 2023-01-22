import React, { useRef, useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./App.css";

function App() {
  const certificateWrapper = useRef(null);
  const [Name, setName] = useState("hgf");

  return (
    <div className="App">
      <div className="Meta">
        <h1>ACM Certificates</h1>
        <p>Please enter your name.</p>
        <input
          type="text"
          id="inputheredude"
          placeholder="Please enter your name..."
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          id="buttonid"
          onClick={(e) => {
            e.preventDefault();
            exportComponentAsPNG(certificateWrapper, {
              fileName: Name,
              html2CanvasOptions: { backgroundColor: null }
            });
          }}
        >
          Download
        </button>
      </div>

      <div id="downloadWrapper" ref={certificateWrapper}>
        <div id="certificateWrapper">
          <div className="certificateName">
            <p id="inputid" onChange={(e) => {
              setName(e.target.value);
            }}>
              {Name}
            </p>
          </div>
          <img
            height={520}
            src="https://i.ibb.co/stkz5Q1/TITAN-3-0-CERTIFICATE1-copy.jpg"
            alt="Certificate"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
