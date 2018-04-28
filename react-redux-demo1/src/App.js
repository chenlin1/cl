import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Title from './title';
import Footer from './footer';
import './App.css';

class App extends Component {
  static childContextTypes = {
    themeColor : PropTypes.string,
    greenColor : PropTypes.string  
  }
   constructor (props){
     super(props)
     this.state = {
       themeColor: 'red',
       greenColor: 'green',
     }
   }

   getChildContext (){
     return {
       themeColor:this.state.themeColor,
       greenColor:this.state.greenColor
     }
   }

  render() {
    return (
      <div className="App">
        <Title />
         <Footer /> 
      </div>
    );
  }
}

export default App;
