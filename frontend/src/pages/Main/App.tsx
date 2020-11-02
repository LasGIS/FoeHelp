/*
 * Copyright 2020 LasGIS FOE Helper
 */

import './App.scss';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Spin } from 'antd';
import classNames from 'classnames';
import Home from "../Home/Home";
import { findSelectedMenuByPathname, MENU_DATA, MenuData } from "./MenuHelper";
import { RootStoreData } from "../../common/types/redux-types";
import { commonHideLoader, commonShowLoader } from "../../common/services/action-creators";
import { connect, ConnectedProps } from "react-redux";
import Calculation from "../Calculation/Calculation";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

/** Здесь указывается версия билда */
const version = '1.0.0.6';

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

const App: React.FC<PropsFromRedux> = (props) => {

  const [ menuCollapsed, setMenuCollapsed ] = useState<boolean>(true);
  const [ selectedKeys, setSelectedKeys ] = useState<string[]>([ '' ]);
  const [ breadcrumbs, setBreadcrumbs ] = useState<string[]>([ '...' ]);

  useEffect(() => {
    onSelectMenu();
  }, []);

  const onSelectMenu = () => {
    const selectedMenu = findSelectedMenuByPathname(window.location.pathname, MENU_DATA);
    setSelectedKeys([ selectedMenu ? selectedMenu.menu.key : '' ]);
    setBreadcrumbs(selectedMenu ? selectedMenu.breadcrumbs : [ '...' ]);
  };

  return (
    <Spin spinning={props.loading} size="large" tip={"Загрузка данных"}>
      <Layout className='app' >
        <Sider
          className="app__left-menu"
          collapsible
          collapsed={menuCollapsed}
          onCollapse={(collapsed) => {
            setMenuCollapsed(collapsed);
          }}
        >
          <div className={classNames("app__left-menu__logo", { "app__left-menu__logo--short": menuCollapsed })}><span>FoeHelp</span></div>
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
            {breadcrumbs.map((crumb: string, index: number) => <Breadcrumb.Item key={index}>{crumb}</Breadcrumb.Item>)}
          </Breadcrumb>
          <Content className="app__content">
            <Switch>
              <Route key='zero' exact path="/" component={Calculation}/>
              <Route key='home' path="/home" component={Home}/>
              {RESOLVED_ROUTES}
            </Switch>
          </Content>
          <Footer className='app__footer'>LasGIS ©2020 Created using Ant Design - version({version})</Footer>
        </Layout>
      </Layout>
    </Spin>
  );
};

const mapState = (state: RootStoreData) => {
  const { loading } = state.common;
  return {
    loading
  };
};

const mapDispatch = {
  commonShowLoader,
  commonHideLoader
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
