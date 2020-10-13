/*
 * Copyright 2020 LasGIS FOE Helper
 */

import './App.scss';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
import classNames from 'classnames';
import Home from "../Home/Home";
import { findSelectedMenuByPathname, MENU_DATA, MenuData } from "./MenuHelper";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

/**  */
const version = '1.0.0.2';

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

const RESOLVED_SUBMENUS = resolveSubmenu(MENU_DATA);
const RESOLVED_ROUTES = resolveRoutes(MENU_DATA);

function App() {

  const [ menuCollapsed, setMenuCollapsed ] = useState<boolean>(false);
  const [ selectedKeys, setSelectedKeys ] = useState<string[]>(['']);
  const [ breadcrumbs, setBreadcrumbs ] = useState<string[]>(['...']);

  useEffect(() => {
    onSelectMenu();
  }, []);

  const onSelectMenu = () => {
    const selectedMenu = findSelectedMenuByPathname(window.location.pathname, MENU_DATA);
    setSelectedKeys([ selectedMenu ? selectedMenu.menu.key : '' ]);
    setBreadcrumbs(selectedMenu ? selectedMenu.breadcrumbs : [ '...' ]);
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
          selectedKeys={selectedKeys}
          onSelect={onSelectMenu}
          style={{ height: '100%' }}
        >
          {RESOLVED_SUBMENUS}
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 12px' }}>
        <Breadcrumb style={{ margin: '6px 0' }}>
          {breadcrumbs.map((crumb: string, index:number) => <Breadcrumb.Item key={index}>{crumb}</Breadcrumb.Item>)}
        </Breadcrumb>
        <Content className="site-layout-background">
          <Switch>
            <Route key='zero' exact path="/" component={Home}/>
            <Route key='home' path="/home" component={Home}/>
            {RESOLVED_ROUTES}
          </Switch>
        </Content>
        <Footer className='footer'>LasGIS ©2020 Created using Ant Design - version({version})</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
