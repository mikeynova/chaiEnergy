import React, { Component } from 'react';
import data from 'json!../../data.json';
import _ from 'underscore';

export default class WorstThree extends Component {

	worstThree() {
    return(
    	_.map(data.worst_three.data, function(badDay, index) {
				return(
		      <div className='cardContainer' key={index}>
		        <h2 className='card'>{new Date(badDay[0] * 1000).toString().slice(0, 15)}</h2>
		        <h2 className='card'>{badDay[1]} watts</h2>
		      </div>
				)
      })
    )
  }

  render() {
    return(
      <div>
      	<h2 className='cardHeader'>Worst Three Days of the Month</h2>
				{this.worstThree()}
      </div>
    )
  }
}