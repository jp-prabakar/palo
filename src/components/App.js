import React from 'react';
import Header from './header';
import IllnessList from '../components/illnesses/IllnessList';
import SeverityLevel from '../components/illnesses/SeverityLevel';
import {Router, Route } from 'react-router-dom';
import WaitingTime from './illnesses/WaitingTime';
import history from '../history';

const App = () => {
    return ( 
    <div className="ui container" style={{marginTop: '10px'}}>
        
        <Router history={history}>
            <Header />
            <Route path="/" exact component={IllnessList} />
            <Route path="/illnesses/severity/:illness" exact component={SeverityLevel} />
            <Route path="/illnesses/showWaitingTime/:severity" exact component={WaitingTime} />
        </Router> 
    </div>);
}

export default App;