import React from "react";
import { DesktopOutlined, HomeOutlined, LaptopOutlined } from "@ant-design/icons/lib/icons";
import Home from "../Home/Home";
import ErasPage from "../Eras/ErasPage";
import GreatBuildingsPage from "../GreatBuildings/GreatBuildingsPage";
import SkillsPage from "../Skills/SkillsPage";

export type SubmenuData = {
  type: 'submenu';
  key: string;
  name: string;
  icon?: React.ReactNode;
  subMenus: MenuData[];
};

export type OptionData = {
  type: 'option';
  key: string;
  name: string;
  pathname: string;
  icon?: React.ReactNode;
  component?: React.ReactNode;
  props?: any;
};

export type MenuData = SubmenuData | OptionData;

export type SelectedMenuData = {
  menu: OptionData;
  breadcrumbs: string[];
};

export const MENU_DATA: MenuData[] = [
  {
    type: 'option', key: "home", name: "Home", icon: <HomeOutlined/>,
    pathname: "/home", component: <Home/>
  }, {
    type: 'submenu', key: "dic", name: "Словари", icon: <DesktopOutlined/>,
    subMenus: [ {
      type: 'option', key: "eras", name: "Эпохи", icon: <LaptopOutlined/>,
      pathname: "/eras", component: <ErasPage/>
    }, {
      type: 'option', key: "g-build", name: "Великие Строения", icon: <LaptopOutlined/>,
      pathname: "/great-buildings", component: <GreatBuildingsPage/>
    }, {
      type: 'option', key: "gb-skills", name: "Усиления Великих Строений", icon: <LaptopOutlined/>,
      pathname: "/great-building-skills", component: <SkillsPage/>
    } ]
  }
];

export const findSelectedMenuByPathname = (
  pathname: string, menuData: MenuData[], breadcrumbs?: string[]
): SelectedMenuData | undefined => {
  const selected = menuData.map(menu => {
    switch (menu.type) {
      case "submenu":
        const newBreadcrumbs: string[] = breadcrumbs ? [ ...breadcrumbs ] : [];
        newBreadcrumbs.push(menu.name);
        const selected = findSelectedMenuByPathname(pathname, menu.subMenus, newBreadcrumbs);
        if (selected) {
          return selected
        }
        break;
      case "option":
        if (pathname.startsWith(process.env.PUBLIC_URL + menu.pathname)) {
          const newBreadcrumbs: string[] = breadcrumbs ? breadcrumbs : [];
          newBreadcrumbs.push(menu.name);
          return {
            menu: menu,
            breadcrumbs: newBreadcrumbs
          }
        }
    }
    return undefined;
  }).filter(menu => menu);
  return selected.length ? selected[0] : undefined;
};
