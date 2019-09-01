import React from "react";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
