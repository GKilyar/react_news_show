import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Modal,Form, Input, Button,Checkbox } from 'antd';
import {Link} from 'react-router';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component{
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
    login(){
        this.setModalVisible(true);
    }


    render(){
        let {getFieldDecorator} = this.props.form; 
        const usershow =this.state.hasLogined ? 
        <Link><Icon type="inbox"/></Link>
        :
        <Icon type="setting" onClick={this.login.bind(this)}/>;
        return(
            <div id="mobile">
                <header>
                    <img src="./src/images/news.png" alt="logo"/>
                    <span>ReactNews</span>
                    {usershow}
                </header>


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
            </div>
            
        );
    }
}

export default MobileHeader = Form.create()(MobileHeader);