import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';

export default class MobileHeader extends React.Component{
    render(){
        return(
            <div id="mobile">
                <header>
                    <img src="./src/images/news.png" alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
            
        );
    }
}