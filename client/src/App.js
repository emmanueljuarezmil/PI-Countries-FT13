import './App.css';
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import ActivityForm from './components/ActivityForm';
import CountryFull from './components/CountryFull';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <>
          <Route path='/' component={Nav}/>
          <Route path="/home" component={Home} />
          <Route path="/country" component={CountryFull} />
          <Route exact path="/about" component={About} />
          <Route exact path="/activity" component={ActivityForm} />
          <Route path='/' component={Footer}/>
        </>
      </Switch>
    </div>
  );
}

export default App;
