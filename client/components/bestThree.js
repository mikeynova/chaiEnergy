import React, { Component } from 'react';
import data from 'json!../../data.json';
import _ from 'underscore';

export default class BestThree extends Component {

	bestThree() {
    return(
    	_.map(data.best_three.data, function(goodDay, index) {
				return(
		      <div className='cardContainer' key={index}>
		        <h2 className='card'>{new Date(goodDay[0] * 1000).toString().slice(0, 15)}</h2>
		        <h2 className='card'>{goodDay[1]} watts</h2>
		      </div>
				)
      })
    )
  }

  render() {
    return(
      <div>
      	<h2 className='cardHeader'>Best Three Days of the Month</h2>
				{this.bestThree()}
      </div>
    )
  }
}