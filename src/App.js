// @flow

import React, { Component } from 'react'
import Dashboard from './dashboard/Dashboard'
import './App.css'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { defaultState } from "./state";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-theme.min.css"

const loggerMiddleware = createLogger();

let store = createStore(reducers, defaultState, applyMiddleware(thunkMiddleware, loggerMiddleware));

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;