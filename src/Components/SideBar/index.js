import React, { Component } from "react";
import { Drawer, Icon } from 'antd';

import { SideBar } from "./styles";


export default class Open extends Component {
    state = {
        visible: false, loading: false,
        menu: [
            { name: 'home', to: '/' },
            { name: 'stock', to: '/' },
            { name: 'star', to: '/' },
            { name: 'message', to: '/' },
            { name: 'setting', to: '/' },
            { name: 'exclamation', to: '/' },
        ],

        list: [
            { name: 'Home', icon: 'home' },
            { name: 'Graphics', icon: 'stock' },
            { name: 'Favorites', icon: 'star' },
            { name: 'Message', icon: 'message' },
            { name: 'Settings', icon: 'setting' },
            { name: 'Help', icon: 'exclamation' },
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

                {this.state.menu.map((element, key) =>
                    <Icon className="menu-item" key={key} type={element.name}></Icon>
                )}

                <Drawer
                    title="Menu"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    {this.state.list.map((element, key) =>
                        <p key={key}><Icon type={element.icon}></Icon>{element.name}</p>
                    )}
                </Drawer>
            </SideBar>
        );
    }
}