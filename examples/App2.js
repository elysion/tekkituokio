import React, { Component, DOM } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    const items = ['first', 'second', 'third']
    return DOM.div({className: 'App'},
        DOM.div({className: 'App-header'},
          DOM.img({src: logo, className: 'App-logo', alt: 'logo'}),
          DOM.h2({}, 'Welcome to Tekkituokio!')),
        DOM.ol({}, items.map((item, index) => DOM.li({ key: index }, item))))
  }
}

export default App
