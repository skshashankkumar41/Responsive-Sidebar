import React from "react";
import * as s from "./Sidebar.styles";

const Sidebar = (props) => {
  const { sidebarHeader, menuItems } = props;

  const menuItemsJSX = menuItems.map((item, index) => {
    return (
      <s.MenuItem key={index}>
        <s.MenuIcon>{item.icon}</s.MenuIcon>
        <s.MenuText>{item.name}</s.MenuText>
      </s.MenuItem>
    );
  });

  return (
    <s.SidebarContainer>
      <s.SidebarHeader>{sidebarHeader}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
