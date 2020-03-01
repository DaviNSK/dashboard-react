import React, { Component } from "react";
import "antd/dist/antd.css";

import GlobalStyle from "./styles/global";
import Open from "./Components/SideBar";
import Header from "./Components/Header";
import Graphics from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <GlobalStyle></GlobalStyle>
        <Header />
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <Open />
          <Graphics />
        </div>
      </div>
    );
  }
}

export default App;
