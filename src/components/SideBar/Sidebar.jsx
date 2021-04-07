import React, { useState, useEffect } from "react";
import * as s from "./Sidebar.styles";

const Sidebar = (props) => {
  const { sidebarHeader, menuItems } = props;

  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);

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

  const handleMenuItemClick = (name) => {
    setSelectedMenuItem(name);
  };

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    return (
      <s.MenuItem
        key={index}
        selected={isItemSelected}
        isSidebarOpen={isSidebarOpen}
        onClick={() => handleMenuItemClick(item.name)}
      >
        <s.MenuIcon isSidebarOpen={isSidebarOpen}>{item.icon}</s.MenuIcon>
        <s.MenuText isSidebarOpen={isSidebarOpen}>{item.name}</s.MenuText>
      </s.MenuItem>
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
