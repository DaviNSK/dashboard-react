import React, { Component } from "react";
import { Dash, Container } from "./styles";
import { Icon } from "antd";

export default class Graphics extends Component {
  state = {
    graphics: [
      {
        name: "Earnings",
        number: "$ 1523",
        text: "Lorem ipsum click!",
        icon: "stock"
      },
      {
        name: "Earnings",
        number: "$ 1523",
        text: "Lorem ipsum click!",
        icon: "stock"
      },
      {
        name: "Earnings",
        number: "$ 123",
        text: "Lorem ipsum click!",
        icon: "stock"
      }
    ]
  };

  render() {
    return (
      <Dash>
        <strong className="dashb">Dashboard > Lorem ipsum</strong>
        <Container>
          {this.state.graphics.map((graph, key) => (
            <div key={key} className="cx">
              <p>{graph.name}</p>
              <h2>{graph.number}</h2>
              <p>{graph.text}</p>
              <Icon type={graph.icon} />
            </div>
          ))}
        </Container>
      </Dash>
    );
  }
}
