import './App.css';
import { Route } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import CountryDetail from './components/CountryDetail/CountryDetail'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Nav}/>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/countryDetail" component={CountryDetail} />
      <Route path='/' component={Footer}/>
    </div>
  );
}

export default App;
