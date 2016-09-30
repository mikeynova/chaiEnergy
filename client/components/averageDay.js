import React, { Component } from 'react';
import data from 'json!../../data.json';

export default class AverageDay extends Component {

  averageDay() {
    return(
      <div>
        <h2 className='cardHeader'>Average Watt Consumption Per Day</h2>
        <div className='cardContainer'>
          <h2 className='card'>{data.average_day} watts</h2>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.averageDay()}
      </div>
    )
  }
}