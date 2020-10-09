/*
 * Copyright 2020 LasGIS FOE Helper
 */

import './App.scss';
import React, { useState } from 'react';
import { Breadcrumb, Button, Layout, Menu, Space } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import classNames from 'classnames';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const App = () => {

  const [ menuCollapsed, setMenuCollapsed ] = useState<boolean>(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/*<Header className="header">
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={[ '2' ]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>*/}
      <Sider
        className="site-left-menu"
        collapsible
        collapsed={menuCollapsed}
        onCollapse={(collapsed) => {
          setMenuCollapsed(collapsed);
        }}
      >
        <div className={classNames("logo", { "logo__short": menuCollapsed })}><span>Logo</span></div>
        <Menu
          mode="inline"
          theme='dark'
          defaultSelectedKeys={[ '1' ]}
          defaultOpenKeys={[ 'sub1' ]}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 12px' }}>
        <Breadcrumb style={{ margin: '6px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="site-layout-background">
          <Space align='center'>
            <Button title='ttt' name='Button1'>Button1</Button>
            <Button title='ttt' name='Button2'>Button2</Button>
            <Button title='ttt' name='Button3'>Button3</Button>
            <Button title='ttt' name='Button4'>Button4</Button>
          </Space>
        </Content>
        <Footer className='footer'>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
