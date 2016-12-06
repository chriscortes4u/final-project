const React = require('react')
const { BrowserRouter, Match } = require('react-router')
 const Home = require('./pages/home')
const About = require('./pages/about')
const Contact = require('./pages/contact')
const Packages = require('./pages/packages')
//const TodoApp = require('./pages/associates/checklist')
const Associates = require('./pages/associates/index')
const Associate = require('./pages/associates/show')
const App = React.createClass({


  render () {
    return (
      <BrowserRouter>
      <div>
     <Match exactly pattern="/chriscortes4u" component={Home} />
     <Match pattern="/about" component={About} />
     <Match pattern="/contact" component={Contact} />
     <Match pattern="/packages" component={Packages} />
     {/* <Match pattern="/checklist" component={TodoApp} /> */}
     <Match pattern="/associates" component={Associates} />
     <Match pattern="/associates/:id/show" component={Associates} />
  </div>
</BrowserRouter>
    )
  }
})

module.exports = App
