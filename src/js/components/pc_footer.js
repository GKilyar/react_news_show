import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';

export default class Footer extends React.Component{

    render(){
        return(
            <footer class="footer">
                <Row>
                    <Col span={2}></Col>

                    <Col span={20} class="footer_s">
                        <span>&copy;&nbsp;Aili created the react news!!</span>
                    </Col>
                    <Col span={2}></Col>
                </Row> 
            </footer>
        );
    }
}