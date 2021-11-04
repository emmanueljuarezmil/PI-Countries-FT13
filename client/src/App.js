import './App.css';
import { Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import CountryDetail from './components/CountryDetail/CountryDetail'
import ActivityForm from './components/ActivityForm/ActivityForm';
import Activities from './components/Activities/Activities';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
        exact path="/" 
        component={Landing} 
        />
        <Route>
          <Route
          path='/' 
          component={Nav}
          />
          <Route 
          exact path="/home" 
          component={Home} 
          />
          <Route 
          exact path="/countryDetail" 
          component={CountryDetail} 
          />
          <Route 
          exact path="/activities" 
          component={Activities} 
          />
          <Route 
          exact path="/newactivity" 
          component={ActivityForm} 
          />
          <Route 
          exact path="/about" 
          component={About} 
          />
          <Route 
          path='/' 
          component={Footer}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
