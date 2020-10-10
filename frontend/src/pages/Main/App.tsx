/*
 * Copyright 2020 LasGIS FOE Helper
 */

import './App.scss';
import React, { useState } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
import { HomeOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import Home from "../Home/Home";
import Optional from "../Optional/Optional";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const App = () => {

  const [ menuCollapsed, setMenuCollapsed ] = useState<boolean>(false);

  const SubMenuOptionals = () => {
    const subMenus = [];
    for (let sub: number = 1; sub < 5; sub++) {
      const options = [];
      for (let opt: number = 1; opt < 5; opt++) {
        options.push(
          <Menu.Item key={`sub${sub}-${opt}`}>
            <span>option{opt}</span>
            <Link to={`sub${sub}-option${opt}`}/>
          </Menu.Item>
        )
      }
      subMenus.push(
        <SubMenu key={`sub${sub}`} icon={<UserOutlined/>} title={`sub navigation ${sub}`}>
          {options}
        </SubMenu>
      );
    }
    return subMenus;
  };

  const RouteOptionals = () => {
    const routes = [];
    for (let sub: number = 1; sub < 5; sub++) {
      for (let opt: number = 1; opt < 5; opt++) {
        routes.push(
          <Route path={`/sub${sub}-option${opt}`}>
            <Optional text={`SUB${sub} OPTION${opt}`}/>
          </Route>
        );
      }
    }
    return routes;
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
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
          <Menu.Item key="home">
            <HomeOutlined/>
            <span>Home</span>
            <Link to="home"/>
          </Menu.Item>
          {SubMenuOptionals()}
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 12px' }}>
        <Breadcrumb style={{ margin: '6px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="site-layout-background">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            {RouteOptionals()}
          </Switch>
        </Content>
        <Footer className='footer'>LasGIS ©2020 Created using Ant Design</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
