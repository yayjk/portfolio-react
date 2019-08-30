import React from "react";
import "./App.css";
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
