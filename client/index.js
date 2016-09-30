import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import BestThree from './components/BestThree';
import WorstThree from './components/WorstThree';
import DayStats from './components/DayStats';
import WeekendWeekdayAverage from './components/WeekendWeekdayAverage';
import AverageDay from './components/AverageDay';
import EnergyThisMonth from './components/EnergyThisMonth'

  const router =(
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <Route path='/BestThree' component={BestThree} />
        <Route path='/WorstThree' component={WorstThree} />
        <Route path='/DayStats' component={DayStats} />
        <Route path='/WeekendWeekdayAverage' component={WeekendWeekdayAverage} />
        <Route path='/AverageDay' component={AverageDay} />
        <Route path='/EnergyThisMonth' component={EnergyThisMonth} />
      </Route>
    </Router>
  ) 
  ReactDOM.render(
    router, document.getElementById('app')
  );