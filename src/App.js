import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Global from './components/Global';
import Resources from './pages/Resources'; 
import Country from './pages/Country';
import Headlines from './pages/Headlines';
import About from './pages/About';

const apiUrlAll = "https://coronavirus-19-api.herokuapp.com/all "
const apiUrlCountries = "https://coronavirus-19-api.herokuapp.com/countries";

function App() {

  const [state, setState] = useState({
    cases: [],
    deaths: [],
    recovered: [],
    countryData: [],
  });


  const getData = () => {
    axios.get(apiUrlAll)
      .then(({data}) => {

        let cases = data.cases;
        let deaths = data.deaths;
        let recovered = data.recovered;

        setState(prevState => {
          return {...prevState, cases: cases, deaths: deaths, recovered: recovered}
        })

        console.log(data);
      })
  }

  const getCountry = () => {
    axios.get(apiUrlCountries)
      .then(({data}) => {
        let countryData = data;

        setState(prevState => {
          return {...prevState,countryData: countryData }
        })
        console.log(countryData);
      })
  }

  useEffect(() => {
    getData();
    getCountry();
  }, [])


  return (
      <BrowserRouter>
        <div>
        <Navbar/>
        <main>
          <div className="container pb-50">
              <Switch>
                <Route exact path="/" render={() => <Global cases={state.cases} deaths={state.deaths} recovered={state.recovered} getData={getData}/> } />
                <Route path="/country" render={() => <Country countryData={state.countryData} /> }/>
                <Route path="/headlines" component={Headlines}/>
                <Route path="/about" component={About} />
                <Route path="/resources" component={Resources} />
              </Switch>
          </div>
        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;
