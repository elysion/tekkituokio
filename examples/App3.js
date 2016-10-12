import React, {Component, DOM} from 'react'
import logo from './logo.svg'
import './App.css'
import R from 'ramda'

class App extends Component {
  render() {
    const items = ['first', 'second', 'third']
    const list = items =>
      DOM.ol({}, items.map(item => DOM.li({}, item)))

    return DOM.div({ className: 'App' },
      DOM.div({ className: 'App-header' },
        DOM.img({ src: logo, className: 'App-logo', alt: 'logo' }),
        DOM.h2({}, 'Welcome to Tekkituokio!')),
      list(items),
      list(items.map(R.toUpper)))
  }
}

export default App
