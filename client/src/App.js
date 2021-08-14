import './App.css';
import { Route } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import CountryDetail from './components/CountryDetail/CountryDetail'
import ActivityForm from './components/ActivityForm/ActivityForm';
import Activities from './components/Activities/Activities';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Nav}/>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/countryDetail" component={CountryDetail} />
      <Route exact path="/activities" component={Activities} />
      <Route exact path="/newactivity" component={ActivityForm} />
      <Route path='/' component={Footer}/>
    </div>
  );
}

export default App;
