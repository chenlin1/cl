import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'

import createStore from './store'
import themeReducer from './reducer'

import logo from './logo.svg';
import './App.css';

const store = createStore(themeReducer)

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext (){
    return { store }
  }


  render() {
   
    return (
      <div className="App">
          <Header />
          <Content />
      </div>
    );
  }
}

export default App;
