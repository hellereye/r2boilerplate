import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom';
import Home from "../components/Home";
import ProductList from "../domain/product/containers/productlist";

import { Layout, Menu, Breadcrumb, Icon, Button,Radio} from 'antd';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, message, Row, Col } from 'antd';

import { Dropdown ,Input ,Table } from 'antd';

const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3d menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
  </Menu>
)
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];
class App extends React.Component {


  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
      collapsed: false,
    };
  }
  // state = {
  //     collapsed: false,
  //   };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render () {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 2 },
      wrapperCol: { span: 6 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
        wrapperCol: { span: 14, offset: 4 },
      } : null;
    return (
      // <div>
      //   <Router>
      //     <div>
      //       <ul>
      //         <li><Link to="/">Home</Link></li>
      //         <li><Link to="/products">products</Link></li>
      //      </ul>
      //       <Route exact path="/" component={Home}/>
      //       <Route path="/products" component={ProductList}/>
      //     </div>
      //   </Router>
      // </div>
      <Layout>
        <Sider width={250} className='left-sidebar-1'
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div style={{height:250,background:"#0d47a1"}}>

          </div>
          <Menu  mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#0d47a1', height: 60 ,color:'#fff'}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <div style={{ background: '#0d47a1', height: 190 ,color:'#fff',paddingLeft:40,paddingRight:40}}>
            <h1 >Welcome</h1>
              <Breadcrumb style={{color:'#fff'}}>
                <Breadcrumb.Item href="">
                  <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  Application List
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  Application
                </Breadcrumb.Item>
              
              </Breadcrumb>

          </div>

          <Content style={{ margin: '-110px 20px 10px 20px', padding: 30, background: '#fff'}}>
            <Row>
              <Col span={24}>
                <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
                  <Radio.Button value="horizontal">新建</Radio.Button>
                  <Radio.Button value="vertical">保存</Radio.Button>
                  <Radio.Button value="inline">删除</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
            <Table dataSource={dataSource} columns={columns} />
          </Content>
        </Layout>
      </Layout>

    );
  }
}

export default connect()( App );
