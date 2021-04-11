import React, { useState, useEffect } from "react";
import * as s from "./Sidebar.styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const Sidebar = (props) => {
  const { sidebarHeader, menuItems } = props;

  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);
  const [subMenusStates, setSubMenus] = useState({});

  // Update of Header State
  useEffect(() => {
    isSidebarOpen
      ? setTimeout(() => setHeader(sidebarHeader.fullName), 200)
      : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader]);

  // Update of Sidebar State
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280) setSidebarState(false);
      else setSidebarState(true);
    };
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);

  useEffect(() => {
    const newSubMenus = {};

    menuItems.forEach((item, index) => {
      const hasSubmenus = item.subMenuItem.length !== 0;

      if (hasSubmenus) {
        newSubMenus[index] = {};
        newSubMenus[index]["isOpen"] = false;
        newSubMenus[index]["selected"] = null;
      }
    });

    setSubMenus(newSubMenus);
  }, [menuItems]);

  const handleMenuItemClick = (name, index) => {
    setSelectedMenuItem(name);
    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    if (subMenusStates.hasOwnProperty(index)) {
      subMenusCopy[index]["isOpen"] = !subMenusStates[index]["isOpen"];
      setSubMenus(subMenusCopy);
    }
  };

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    const hasSubMenu = item.subMenuItem.length !== 0;
    const isOpen = subMenusStates[index] ? subMenusStates[index].isOpen : null;
    const subMenuJSX = item.subMenuItem.map((subMenu, subMenuIndex) => {
      return <s.SubMenuItem key={subMenuIndex}>{subMenu.name}</s.SubMenuItem>;
    });

    return (
      <s.ItemContainer key={index}>
        <s.MenuItem
          selected={isItemSelected}
          isSidebarOpen={isSidebarOpen}
          onClick={() => handleMenuItemClick(item.name, index)}
        >
          <s.MenuIcon isSidebarOpen={isSidebarOpen}>{item.icon}</s.MenuIcon>
          <s.MenuText isSidebarOpen={isSidebarOpen}>{item.name}</s.MenuText>
          {hasSubMenu && !isOpen && (
            <s.DropdownIcon>
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </s.DropdownIcon>
          )}
          {hasSubMenu && isOpen && (
            <s.DropdownIcon>
              <ArrowDropUpIcon></ArrowDropUpIcon>
            </s.DropdownIcon>
          )}
        </s.MenuItem>
        {hasSubMenu && isOpen && (
          <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>
            {subMenuJSX}
          </s.SubMenuItemContainer>
        )}
      </s.ItemContainer>
    );
  });

  return (
    <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
      <s.SidebarHeader>{header}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler></s.Toggler>
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
