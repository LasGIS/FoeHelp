import React from "react";
import { DesktopOutlined, HomeOutlined, LaptopOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import Home from "../Home/Home";
import Optional from "../Optional/Optional";
import OptionalNotArg from "../Optional/OptionalNotArg";
import ErasPage from "../Eras/Eras";

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
      type: 'option', key: "great_buildings", name: "Великие Строения", icon: <LaptopOutlined/>,
      pathname: "/great-buildings", component: <Optional text="Great Buildings"/>
    } ]
  }, {
    type: 'submenu', key: "sub2", name: "sub navigation 2", icon: <DesktopOutlined/>,
    subMenus: [ {
      type: 'option', key: "sub2-1", name: "Option 1", icon: <LaptopOutlined/>,
      pathname: "/sub2-option1", component: <Optional text="SUB2 OPTION1"/>
    }, {
      type: 'submenu', key: "sub22", name: "sub navigation 22", icon: <DesktopOutlined/>,
      subMenus: [ {
        type: 'option', key: "sub22-1", name: "Option 1", icon: <LaptopOutlined/>,
        pathname: "/sub22-option1", component: <Optional text="SUB22 OPTION1"/>
      },{
        type: 'option', key: "sub22-2", name: "Option 2", icon: <LaptopOutlined/>,
        pathname: "/sub22-option2", component: <Optional text="SUB22 OPTION2"/>
      } ]
    }, {
      type: 'option', key: "sub2-3", name: "Option 3", icon: <LaptopOutlined/>,
      pathname: "/sub2-option3", component: <Optional text="SUB2 OPTION3"/>
    } ]
  }, {
    type: 'submenu', key: "sub3", name: "sub navigation 3", icon: <DesktopOutlined/>,
    subMenus: [ {
      type: 'option', key: "sub3-1", name: "Option 1", icon: <LaptopOutlined/>,
      pathname: "/sub3-option1", component: <Optional text="SUB3 OPTION1"/>
    }, {
      type: 'option', key: "sub3-2", name: "Option 2", icon: <LaptopOutlined/>,
      pathname: "/sub3-option2", component: <Optional text="SUB3 OPTION2"/>
    }, {
      type: 'option', key: "sub3-3", name: "OptionalNotArg", icon: <UserOutlined/>,
      pathname: "/sub3-option3", component: <OptionalNotArg/>
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
        if (pathname.startsWith(menu.pathname)) {
          const newBreadcrumbs: string[] = breadcrumbs ? breadcrumbs : [];
          newBreadcrumbs.push(menu.name);
          return {
            menu: menu,
            breadcrumbs: newBreadcrumbs
          }
        }
    }
  }).filter(menu => menu);
  return selected.length ? selected[0] : undefined;
};
