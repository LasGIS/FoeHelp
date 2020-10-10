/*
 * Copyright 2020 LasGIS FOE Helper
 */

import './App.scss';
import React, { useState } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
import classNames from 'classnames';
import Home from "../Home/Home";
import { MENU_DATA, MenuData } from "./MenuHelper";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const App = () => {

  const [ menuCollapsed, setMenuCollapsed ] = useState<boolean>(false);

  const resolveSubmenu = (subMenus: MenuData[]) => {
    return subMenus.map((menu: MenuData) => {
      switch (menu.type) {
        case "option": {
          return (
            <Menu.Item key={menu.key} icon={menu.icon}>
              <span>{menu.name}</span>
              <Link to={menu.pathname}/>
            </Menu.Item>
          );
        }
        case "submenu": {
          return (
            <SubMenu key={menu.key} icon={menu.icon} title={menu.name}>
              {resolveSubmenu(menu.subMenus)}
            </SubMenu>
          );
        }
        default:
          return null;
      }
    });
  };

  const resolveRoutes = (subMenus: MenuData[]): any[] => {
    return subMenus.map((menu: MenuData) => {
      const summary = [];
      switch (menu.type) {
        case "option": {
          summary.push(
            <Route key={menu.key} path={menu.pathname}>
              {menu.component}
            </Route>
          );
          break;
        }
        case "submenu": {
          summary.push(resolveRoutes(menu.subMenus));
          break;
        }
      }
      return summary;
    });
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
          {resolveSubmenu(MENU_DATA)}
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
            <Route key='zero' exact path="/" component={Home}/>
            <Route key='home' path="/home" component={Home}/>
            {resolveRoutes(MENU_DATA)}
          </Switch>
        </Content>
        <Footer className='footer'>LasGIS ©2020 Created using Ant Design</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
