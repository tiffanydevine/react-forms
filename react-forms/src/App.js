import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const MainInterface = React.createClass({
  getInitialState: function(){
    return {
      title: "Appointments",
      show: true 
    }
  },

  render: function(){
    var showTitle; 
    if (this.state.show) {
      showTitle = 'New '
    }

    var displayList = {
      display: this.state.show ? 'block' : 'none', 
      color: 'red'
    }

    return (
      <div className='interface'>
        <h1>{showTitle} {this.state.title}</h1>
        <ul style={displayList}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>

        </ul>
      </div>
      )
  }, 



}); 

export default MainInterface;

