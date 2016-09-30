import React, { Component } from 'react';
import data from 'json!../../data.json';
import { Link } from 'react-router';

export default class App extends Component {

  startEndTime() {
    return <h1>Energy Consumption From {new Date(data.relevant_timespan.starttime * 1000).toString().slice(0, 15)} to {new Date(data.relevant_timespan.endtime * 1000).toString().slice(0, 15)}</h1>
  }

  render() {
    return(
      <div>
      <div>
        <div className='header'>
          {this.startEndTime()}
        </div>
        <div className='links'>
          <Link className='link' to='/BestThree'>Best Three Days</Link>
          <Link className='link' to='/WorstThree'>Worst Three Days</Link>
          <Link className='link' to='/DayStats'>Day Stats</Link>
          <Link className='link' to='/WeekendWeekdayAverage'>Weekend/Weekday Averages</Link>
          <Link className='link' to='/AverageDay'>Daily Average</Link>
          <Link className='link' to='/EnergyThisMonth'>Energy Used This Month</Link>
        </div>
      </div>
        {this.props.children}
      </div>
    )
  }
}