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

    return (
      <h1>{showTitle}
      {this.state.title}</h1>

      )
  }

}); 

export default MainInterface;

