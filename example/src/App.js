import React, {DOM} from 'react'
import logo from './logo.svg'
import './App.css'

const Form = React.createClass({
  getInitialState: () => ({
    text: 'Default text'
  }),
  render: function () {
    return DOM.form({},
      DOM.textarea({ onChange: e => this.setState({ text: e.target.value }), value: this.state.text }),
      DOM.br({}),
      DOM.button({ onClick: e => {
        e.preventDefault()
        this.props.onSubmitCallback(this.state.text)
      }}, 'Send'))
  }
})

const App = React.createClass({
  render: function () {
    return DOM.div({ className: 'App' },
      DOM.div({ className: 'App-header' },
        DOM.img({ src: logo, className: 'App-logo', alt: 'logo' }),
        DOM.h2({}, 'Welcome to Tekkituokio!')),
      React.createElement(Form, { onSubmitCallback: text => console.log(`Do something useful with text: ${text}`)}))
  }
})

export default App
