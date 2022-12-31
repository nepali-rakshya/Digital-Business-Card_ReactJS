import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Image from "./Components/Image";
import Connection from "./Components/Connection";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container">
      <div className="section-container">
        <Image />
        <div className="section-padding">
          <Connection />
          <Content />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
