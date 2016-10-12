import React, {Component, DOM} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    const List = React.createClass({
      render: function () {
        return DOM.ol({}, this.props.items.map(item => DOM.li({}, item)))
      }
    })

    const items = ['first', 'second', 'third']

    return DOM.div({ className: 'App' },
      DOM.div({ className: 'App-header' },
        DOM.img({ src: logo, className: 'App-logo', alt: 'logo' }),
        DOM.h2({}, 'Welcome to Tekkituokio!')),
      React.createElement(List, { items }))
  }
}

export default App
