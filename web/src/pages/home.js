const React = require('react');
import Head from 'next/head'
const {Link} = require('react-router')

const Home = React.createClass({
  render(){
    return (
<div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green  mb2">
      <div className="pa3 pa5-ns">
      <h1 className="tc mt2 mb0 baskerville i fw1 f1">Chris Cleans 4u!</h1>
        <h2 className="tc mt2 mb0 f6 fw4 ttu tracked">Let Chris do the cleaning for you!</h2>
        <nav className="bt bb tc mw7 center mt4">
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/chriscortes4u">Home</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/packages">Packages</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/signin">Sign In</a>
      </nav>
      <div content="inital-scale=1.0, width=device-width" className="tc pl2">
        <img src="/static/cleanP.jpg" />
      </div>
      </div>
      </div>
    )
  }
})

module.exports = Home
