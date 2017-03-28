import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class PCHeader extends React.Component{

    constructor(){
        super();
        this.state={
            current:'guonei'
        }
    }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }


    render(){
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="./src/images/news.png"/>
                            <span>AILI_REACT_NEWS</span>
                        </a>
                    </Col>

                    <Col span={16}>
                        <Menu  onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}  mode="horizontal">
                            <Menu.Item key="top">
                                <Icon type="mail" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keyi">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                        </Menu>
                    </Col>

                    <Col span={2}></Col>
                </Row> 
            </header>
        );
    }
}