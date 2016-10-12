import React, {DOM} from 'react'
import logo from './logo.svg'
import './App.css'

const App = React.createClass({
  getInitialState: () => ({
    text: 'Default text'
  }),
  render: function () {
    return DOM.div({ className: 'App' },
      DOM.div({ className: 'App-header' },
        DOM.img({ src: logo, className: 'App-logo', alt: 'logo' }),
        DOM.h2({}, 'Welcome to Tekkituokio!')),
      DOM.textarea({ onChange: e => this.setState({ text: e.target.value }), value: this.state.text }))
  }
})

export default App
