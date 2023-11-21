import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Book from "./pages/Booking";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Room from "./pages/Room"
import Furniture from "./pages/Furniture";
import Electronics  from "./pages/Electronics";
import Food from "./pages/Food";



const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/book" component={Book}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route> 
        <Route path="/room" component={Room}></Route>
        <Route path="/furniture" component={Furniture}></Route>
        <Route path="/electronics" component={Electronics}></Route>
        <Route path="/food" component={Food}></Route>
        
      <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
