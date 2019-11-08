import React from "react";
import "./TFTAssistant.scss";
import Navbar from "../Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import CompositionsContainer from "../CompositionsContainer/CompositionsContainer";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";

const TFTAssistant: React.FC = () => {
  return (
    <div className="TFTAssistant">
      <Navbar />
      <Switch>
        <Route path="/compositions">
          <CompositionsContainer />
        </Route>
        <Route path="/items">
          <CompositionsContainer />
        </Route>
        <Route path="/units">
          <CompositionsContainer />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default TFTAssistant;
