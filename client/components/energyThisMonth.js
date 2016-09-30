import React, { Component } from 'react';
import data from 'json!../../data.json';

export default class EnergyThisMonth extends Component {

  energyThisMonth() {
    return(
      <div>
        <h2 className='cardHeader'>Energy Used This Month</h2>
        <div className='cardContainer'>
          <h2 className='card'>{data.monthly_usage} watts</h2>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.energyThisMonth()}
      </div>
    )
  }
}