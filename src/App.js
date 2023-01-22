import React, { useRef, useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./App.css";

function App() {
  const certificateWrapper = useRef(null);
  const [Name, setName] = useState("Coder_Ravan");

  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(295);

  const [imageURL, setImageURL] = useState("https://i.ibb.co/stkz5Q1/TITAN-3-0-CERTIFICATE1-copy.jpg")

  const [tempImageURL, setTempImageURL] = useState("https://i.ibb.co/stkz5Q1/TITAN-3-0-CERTIFICATE1-copy.jpg");

  return (
    <div className="App">
      <div className="Meta">
        <h1>DCC Certificate Generator</h1>
        <p>Please enter your name.</p>
        <a href="https://github.com/singhatithi/Certificate-generator" target="_blank">
          <h3>Click Here to open documentation</h3>
        </a>
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
              fileName: document.getElementById("inputheredude").value,
              html2CanvasOptions: { backgroundColor: null }
            });
          }}
        >
          Download
        </button>
        <br />
        <button id="buttonid" onClick={() => { setYAxis(yAxis - 5); console.log(imageURL) }}>
          UP
        </button>
        <button id="buttonid" onClick={() => { setYAxis(yAxis + 5) }}>
          Down
        </button>
        <button id="buttonid" onClick={() => { setXAxis(xAxis - 5) }}>
          Left
        </button>
        <button id="buttonid" onClick={() => { setXAxis(xAxis + 5) }}>
          Right
        </button>
        <input
          type="text"
          id="inputheredude"
          placeholder="Please enter the certificate image URL here"
          onChange={(e) => {
            setTempImageURL(e.target.value);
          }}
        />
        <button id="buttonid" onClick={() => { setImageURL(tempImageURL) }}>
          Load Image
        </button>
      </div>


      <div id="downloadWrapper" ref={certificateWrapper}>
        <div id="certificateWrapper">
          <div className="certificateName">
            <p id="inputid" onChange={(e) => {
              setName(e.target.value);
            }}
              style={{
                left: `${xAxis}px`,
                top: `${yAxis}px`,
              }}
            >
              {Name}
            </p>
          </div>
          <img
            height={520}
            src={`${imageURL}`}
            alt="Certificate"
          />
        </div>
      </div>
    </div >
  );
}

export default App;
