import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="section-container"></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
