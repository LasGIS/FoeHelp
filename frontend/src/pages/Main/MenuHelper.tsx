import React, { ComponentType } from "react";
import { HomeOutlined, BlockOutlined, BulbOutlined, DesktopOutlined, SettingOutlined, WifiOutlined } from "@ant-design/icons/lib/icons";
import { ConnectedComponent } from "react-redux";
import Optional from "../Optional/Optional";
import Home from "../Home/Home";

export type MenuData = {
  key: string;
  name: string;
  pathname: string;
  component?: ConnectedComponent<ComponentType<any>, any> | React.FC<any>;
  props?: any;
  icon?: React.ReactNode;
  subMenus?: MenuData[];
};

export const MENU_DATA: MenuData[] = [
  {
    key: "home", name: "Home", pathname: "/home",
    icon: <HomeOutlined/>, component: Home
  }, {
    key: "1", name: "Hosts", pathname: "/hosts",
    icon: <DesktopOutlined/>, component: Optional
  }
];

export const findKeyByPathname = (pathname: string): string => {
  const menu = MENU_DATA.find(menu => pathname.startsWith(menu.pathname));
  return menu ? menu.key : "";
};
