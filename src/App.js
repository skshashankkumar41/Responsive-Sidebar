import React from "react";
import * as s from "./App.styles";
import Sidebar from "./components/SideBar/Sidebar";
import MainView from "./components/MainView/MainView";

function App() {
  return (
    <s.App>
      <Sidebar></Sidebar>
      <MainView></MainView>
    </s.App>
  );
}

export default App;
