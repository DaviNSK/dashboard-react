import React, { Component } from "react";

import { Container } from "./styles";

export default class Settings extends Component {
  render() {
    return (
      <Container>
        <h1>Your account</h1>
        <strong>Change Password</strong>
        <div className="line-1"></div>
        <div className="input-1">
          <p>Current</p>
          <input placeholder="" type="password" />
        </div>
        <div className="input-2">
          <p>New password</p>
          <input placeholder="" type="password"></input>
        </div>
        <div className="input-3">
          <p>Type again</p>
          <input placeholder="" type="password"></input>
        </div>
        <a href="">Recovered password?</a>
        <div className="line-2"></div>
        <button type="text">Save editions</button>
      </Container>
    );
  }
}
