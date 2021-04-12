import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/MainView/Home/Home";
import About from "./components/MainView/About/About";
import Destinations from "./components/MainView/Destinations/Destination";
import Blog from "./components/MainView/Blog/Blog";
import Contact from "./components/MainView/Contacts/Contact";
import Services from "./components/MainView/Services/Services";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/destinations" component={Destinations}></Route>
      <Route path="/blog" component={Blog}></Route>
      <Route path="/contacts" component={Contact}></Route>
      <Route path="/services" component={Services}></Route>
    </Switch>
  );
};

export default Routes;
