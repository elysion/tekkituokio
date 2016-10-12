import React, { Component, DOM } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return DOM.div({className: 'App'},
        DOM.div({className: 'App-header'},
          DOM.img({src: logo, className: 'App-logo', alt: 'logo'}),
          DOM.h2({}, 'Welcome to Tekkituokio!')),
        DOM.p({className: 'App-intro'},
          'To get started, edit ',
          DOM.code({}, 'src/App.js'), 'and save to reload.'))
  }
}

export default App
