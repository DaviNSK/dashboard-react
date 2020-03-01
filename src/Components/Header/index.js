import React, { Component } from 'react';
import { Icon } from "antd";

import { Head, Search } from './styles';

export default class Header extends Component {
  render() {
    return (
      <Head>
        <div className="header-tp"> 
          <p>Hi, David !</p>
          <Icon className="user" type="user" />
          <Icon className="bell" type="bell" />
          <div className="form" ></div>
          <Search
            placeholder=""
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            icon={"search"}
        ></Search>
        </div>
      </Head>
    )

  }
}
