import React, { Component } from "react";
import { exportComponentAsPNG, exportComponentAsPDF } from "react-component-export-image";
import "./App.css";

class App extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "hgf"
  };
  render() {
    return (
      <div className="App">
        <div className="Meta">
          <h1>ACM Certificates</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            id="inputheredude"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <button
            id="buttonid"
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                fileName: this.state.Name,
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <div className="certificateName"><p id="inputid" onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}>{this.state.Name}</p></div>
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
}

export default App;

// import React from 'react'
// import { exportComponentAsPNG, exportComponentAsPDF } from "react-component-export-image";
// import { useState } from 'react';

// function App() {
//   const [name , setName]=useState("atithi")
//   return(
//     <div className="App">
//       <div className="Meta">
//         <h1>ACM Certificates</h1>
//         <p>Please enter your name.</p>
//         <input
//           type="text"
//           id="inputheredude"
//           placeholder="Please enter your name..."
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value)
//           }}
//         />
//         <button
//           id="buttonid"
//           onClick={(e) => {
//             e.preventDefault();
//             exportComponentAsPNG(this.certificateWrapper, {
//               fileName: name,
//               html2CanvasOptions: { backgroundColor: null }
//             });
//           }}
//         >
//           Download
//         </button>
//       </div>

//       <div id="downloadWrapper" ref={this.certificateWrapper}>
//         <div id="certificateWrapper">
//           <div className="certificateName"><p id="inputid" onChange={(e) => {
//             setName(e.target.value)
//           }}>name</p></div>
//           <img
//             height={520}
//             src="https://i.ibb.co/stkz5Q1/TITAN-3-0-CERTIFICATE1-copy.jpg"
//             alt="Certificate"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App