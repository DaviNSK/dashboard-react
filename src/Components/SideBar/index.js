import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Icon } from "antd";

import { SideBar, Menulist } from "./styles";

export default class Open extends Component {
  state = {
    visible: false,
    loading: false,
    menu: [
      { name: "home", to: "/" },
      { name: "stock", to: "/" },
      { name: "star", to: "/favorites" },
      { name: "message", to: "/messages" },
      { name: "setting", to: "/settings" },
      { name: "exclamation", to: "/help" }
    ],

    list: [
      { name: "Home", icon: "home", to: "/" },
      { name: "Graphics", icon: "stock", to: "/" },
      { name: "Favorites", icon: "star", to: "/favorites" },
      { name: "Message", icon: "message", to: "/messages" },
      { name: "Settings", icon: "setting", to: "/settings" },
      { name: "Help", icon: "exclamation", to: "/help" }
    ]
  };

  showDrawer = () => {
    this.setState({
      visible: true,
      loading: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      loading: false
    });
  };

  render() {
    return (
      <SideBar>
        <Icon className="btn-menu" type={"menu"} onClick={this.showDrawer} />

        {this.state.menu.map((element, key) => (
          <NavLink to={element.to} key={key} activeClassName="selected">
            <Icon className="menu-item" type={element.name}></Icon>
          </NavLink>
        ))}

        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Menulist>
          {this.state.list.map((element, key) => (
            <NavLink to={element.to} key={key} activeClassName="selected">
              <Icon className="menu-list" type={element.icon}></Icon>
              {element.name}
            </NavLink>
          ))}
          </Menulist>
        </Drawer>
      </SideBar>
    );
  }
}
