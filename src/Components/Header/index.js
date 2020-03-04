import React, { Component } from "react";
import { Icon } from "antd";

import { Head, Search } from "./styles";

export default class Header extends Component {
  render() {
    return (
      <Head>
        <p>Hi, David !</p>
        <Icon className="user" type="user" />
        <Icon className="bell" type="bell" />
        <Search
          placeholder="Search Graphichs"
          onChange={value => console.log(value)}
          style={{ width: 200 }}
        ></Search>
      </Head>
    );
  }
}
