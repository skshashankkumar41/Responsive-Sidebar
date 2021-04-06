import React from "react";
import * as s from "./App.styles";
import Sidebar from "./components/SideBar/Sidebar";
import MainView from "./components/MainView/MainView";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ExploreIcon from "@material-ui/icons/Explore";
import BookIcon from "@material-ui/icons/Book";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ContactsIcon from "@material-ui/icons/Contacts";

function App() {
  const sidebarHeader = {
    fullName: "Travel Mate",
    shortName: "TM",
  };

  const menuItems = [
    { name: "Home", to: "/", icon: <HomeIcon></HomeIcon>, subMenuItem: [] },
    {
      name: "About",
      to: "/about",
      icon: <InfoIcon></InfoIcon>,
      subMenuItem: [],
    },
    {
      name: "Destinations",
      to: "/destinations",
      icon: <ExploreIcon></ExploreIcon>,
      subMenuItem: [
        { name: "Canada", to: "/canada" },
        { name: "Brazil", to: "/brazil" },
        { name: "India", to: "/india" },
        { name: "Nepal", to: "/nepal" },
        { name: "Kenya", to: "/kenya" },
      ],
    },
    { name: "Blog", to: "/blog", icon: <BookIcon></BookIcon>, subMenuItem: [] },
    {
      name: "Services",
      to: "/services",
      icon: <SettingsApplicationsIcon></SettingsApplicationsIcon>,
      subMenuItem: [],
    },
    {
      name: "Contacts",
      to: "/contacts",
      icon: <ContactsIcon></ContactsIcon>,
      subMenuItem: [],
    },
  ];
  return (
    <s.App>
      <Sidebar sidebarHeader={sidebarHeader} menuItems={menuItems}></Sidebar>
      <MainView></MainView>
    </s.App>
  );
}

export default App;
