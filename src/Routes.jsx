import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/MainView/Home/Home";
import About from "./components/MainView/About/About";
import Destinations from "./components/MainView/Destinations/Destination";
import Blog from "./components/MainView/Blog/Blog";
import Contact from "./components/MainView/Contacts/Contact";
import Services from "./components/MainView/Services/Services";
import Country from "./components/MainView/Country/Country";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/destinations" component={Destinations}></Route>
      <Route exact path="/destinations/:country" component={Country}></Route>
      <Route exact path="/blog" component={Blog}></Route>
      <Route exact path="/contacts" component={Contact}></Route>
      <Route exact path="/services" component={Services}></Route>
    </Switch>
  );
};

export default Routes;
