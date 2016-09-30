import React, { Component } from 'react';
import data from 'json!../../data.json';

export default class WeekendWeekdayAverage extends Component {

  weekendWeekdayAverage() {
    return(
      <div>
        <h2 className='cardHeader'>Weekend Average</h2>
        <div className='cardContainer'>
          <h2 className='card'>{data.weekend_average} watts</h2>
        </div>
        
        <h2 className='weekdayCardHeader'>Weekday Average</h2>
        <div className='cardContainer'>
          <h2 className='card'>{data.weekday_average} watts</h2>
        </div>
      </div>
    )
  }
  
  render() {
    return(
      <div>
        {this.weekendWeekdayAverage()}
      </div>
    )
  }
}