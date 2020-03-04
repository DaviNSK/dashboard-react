import React, { Component } from "react";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Open from "./Components/SideBar";
import Header from "./Components/Header";
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ width: "100%", height: "calc(100vh - 55px)" }}>
          <GlobalStyle />
          <Header />
          <div style={{ display: "flex", height: "100%", width: "100%" }}>
            <Open />
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
