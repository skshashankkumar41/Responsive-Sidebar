import React from "react";
import * as s from "./App.styles";
import Sidebar from "./components/SideBar/Sidebar";
import MainView from "./components/MainView/MainView";

function App() {
  const sidebarHeader = "Travelling Mate";

  const menuItems = [
    { name: "Home", to: "/", icon: "", subMenuItem: [] },
    { name: "About", to: "/about", icon: "", subMenuItem: [] },
    {
      name: "Destinations",
      to: "/destinations",
      icon: "",
      subMenuItem: [
        { name: "Canada", to: "/canada" },
        { name: "Brazil", to: "/brazil" },
        { name: "India", to: "/india" },
        { name: "Nepal", to: "/nepal" },
        { name: "Kenya", to: "/kenya" },
      ],
    },
    { name: "Blog", to: "/blog", icon: "", subMenuItem: [] },
    { name: "Services", to: "/services", icon: "", subMenuItem: [] },
    { name: "Contacts", to: "/contacts", icon: "", subMenuItem: [] },
  ];
  return (
    <s.App>
      <Sidebar sidebarHeader={sidebarHeader} menuItems={menuItems}></Sidebar>
      <MainView></MainView>
    </s.App>
  );
}

export default App;
