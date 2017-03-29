import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Modal,Form, Input, Button,Checkbox } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component{

    constructor(){
        super();
        this.state={
            current:'guonei',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            userNickName:'',
            userid:0
        }
    }
    handleClick (e){
        if(e.key = "register"){
            this.setState({current:'register'});
            this.setModalVisible(true); 
        }else{
            this.setState({current:e.key});
        }
    }

    setModalVisible(value){
        this.setState({modalVisible:value});
    }

    handleSubmit (e){
        e.preventDefault();
        let myFetchOptions = {
            method:'GET'
        }
        let formData = this.props.form.getFieldsValue();
        console.log(formData);  
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=username&password=password&r_username="
        +formData.r_username+"&r_password"+formData.r_password +"&r_confirmPassword"+formData.r_confirmPassword,myFetchOptions)
        .then(response=>response.json()).then(json=>{
            this.setState({userNickName:json.NickUserName,userid:json.UserId});
        });

        message.success("请求成功");
        this.setModalVisible(false);
    }
    render(){
        let {getFieldDecorator} = this.props.form; 
        const usershow = this.state.hasLogined 
        ? 
        <Menu.Item key="logout" class="register">
            <button type="primary" htmlType="button">{this.state.userNickName}</button>&nbsp;&nbsp;
            <Link target="_blank">
                <button type="dashed" htmlType="button">个人中心</button>
            </Link>
            &nbsp;&nbsp;
            <button type="ghost" htmlType="button">退出</button>
        </Menu.Item>
        :
         <Menu.Item key="register" class="register">
            <Icon type="appstore"/>注册/登录
        </Menu.Item>
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
                            {usershow}
                        </Menu>

                        <Modal title="用户中心" wrapClassName="vertivcal-center-modal" visible={this.state.modalVisible} 
                            onCancel={()=>this.setModalVisible(false)} 
                            onOk={()=>this.setModalVisible(false)}>
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                                        <FormItem>
                                        {getFieldDecorator('r_username', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账户名" />
                                        )}
                                        </FormItem>
                                        <FormItem>
                                        {getFieldDecorator('r_password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                                        )}
                                        </FormItem>
                                         <FormItem>
                                        {getFieldDecorator('r_confirmPassword', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="再次输入密码" />
                                        )}
                                        </FormItem>                  
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Log in
                                        </Button>                   
                                    </Form>
                                </TabPane>
                            </Tabs>

                        </Modal>
                    </Col>

                    <Col span={2}></Col>
                </Row> 
            </header>
        );
    }
}

export default PCHeader = Form.create()(PCHeader);