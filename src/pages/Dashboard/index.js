import React, { Component } from "react";
import { Icon } from "antd";

import BubbleChart from "./../../Components/CrazyLine";
import DoughnutChart from "./../../Components/DoughnutChart";
import BarChart from "./../../Components/BarChart";
import {
  Dash,
  Container,
  Description,
  Content,
  Dowloads,
  Container2,
  Resulted,
  Resgraph,
  Percentage
} from "./styles";

export default class Dashboard extends Component {
  state = {
    graphics: [
      {
        name: "Earnings",
        number: "$ 1523,00",
        text: "Lorem ipsum dolar!",
        icon: "stock"
      },
      {
        name: "Dowloads",
        number: "1,242,250",
        text: "Lorem ipsum dolar!",
        icon: "stock"
      },
      {
        name: "Favorites",
        number: "122,030",
        text: "Lorem ipsum dolar!",
        icon: "stock"
      }
    ],
    news: [
      {
        name: "Recently News",
        title: "Graphic News",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        title: "Graphic News",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        title: "Graphic News",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        title: "Graphic News",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      }
    ],
    list: [
      {
        name: "Lorem ipsum",
        number: "90"
      },
      {
        name: "Delier sut amet",
        number: "120"
      },
      {
        name: "Connections",
        number: "20"
      },
      {
        name: "Adaptanding Elit",
        number: "30"
      },
      {
        name: "Do Element Temper",
        number: "190"
      },
      {
        name: "Incidehunt",
        number: "20"
      },
      {
        name: "Labore El Dulure",
        number: "30"
      },
      {
        name: "Ut henim",
        number: "40"
      },
      {
        name: "Minimum Verivant",
        number: "95"
      },
      {
        name: "Hoghwarts Exe",
        number: "195"
      },
      {
        name: "Exerpitur sent",
        number: "230"
      },
      {
        name: "Capintun Ex Pres",
        number: "360"
      },
      {
        name: "Default Medit",
        number: "10"
      }
    ],
  };

  render() {
    return (
      <Dash>
        <div className="container-1">
          <Content>
            <strong className="dashb">Dashboard > Lorem ipsum</strong>
            <Container>
              {this.state.graphics.map((item, key) => (
                <div key={key} className="cx">
                  <p>{item.name}</p>
                  <h2>{item.number}</h2>
                  <p className="p2">{item.text}</p>
                  <Icon className="icon1" type={item.icon} />
                </div>
              ))}

              <Dowloads>
                <p>Dowload charts02</p>
                <div className="list-dowload">
                  {this.state.list.map((item, key) => (
                    <li key={key}>
                      {item.name}
                      <span>{item.number}</span>
                    </li>
                  ))}
                </div>
              </Dowloads>

              <Resgraph>
                <Resulted padding="10px 100px">
                    <div>
                    <BubbleChart></BubbleChart> 
                    </div>
                </Resulted>

                <Resulted padding="10px 100px">
                  <BarChart></BarChart>
                </Resulted>

              </Resgraph>
            </Container>
          </Content>
        </div>

        <Container2>
          <Description>
            {this.state.news.map((item, key) => (
              <div key={key} className="description">
                <h1>{item.name}</h1>
                <div className="cx-text">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Description>

          <Percentage>
              <div className="container-perc">
                <DoughnutChart></DoughnutChart>
              </div>
          </Percentage>
        </Container2>
      </Dash>
    );
  }
}
