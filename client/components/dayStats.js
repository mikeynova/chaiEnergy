import React, { Component } from 'react';
import data from 'json!../../data.json';
import _ from 'underscore';

export default class DayStats extends Component {

  dayStats() {
    return _.map(data.day_stats, function(watts, day, i) {
    	return (
    		<div className='day' key={day}>
	    		<span className='dayCard'>{new Date(day * 1000).toString().slice(0, 15)}: </span>
	    		<span className='dayWatts'>{watts} watts</span>	
    		</div>
    	)
    })
  }

  render() {
    return(
      <div>
      	<h2 className='cardHeader'>Daily Energy Usage For the Month</h2>
				<div className='DayCardContainer'>
	      	{this.dayStats()}
				</div>
      </div>
    )
  }
}