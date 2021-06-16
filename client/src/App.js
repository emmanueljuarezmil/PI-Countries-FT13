import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ActivityForm from "./components/ActivityForm";
import CountriesCards from "./components/CountriesCards";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={SearchBar} />
      <Route exact path="/home" component={CountriesCards} />
      <Route exact path="/activity" component={ActivityForm} />
      <Footer/>
    </div>
  );
}

export default App;
