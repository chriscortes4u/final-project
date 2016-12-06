const React = require('react')
import Head from 'next/head'
import Link from 'next/link'

const Contact = React.createClass({

  render(){
    return (
      <div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green  mb2">
        <Head>

            <title>Chris Cleans 4u</title>
            <meta name="viewport" content="inital-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
        </Head>
        <div class="tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div class="tc">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">Chris Cleans 4u</h1>
          <nav className="bt bb tc mw7 center mt4">
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/chriscortes4u">Home</a>
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/packages">Packages</a>
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/signin">Sign In</a>
        </nav>
            <img class="tc br-100 h4 w4 dib ba b--black-05 pa2 mw-145 mh-145 " src="/static/chris4.jpg" />

          </div>
        </div>


          <p className="tc">Chris Cleans 4u is the perfect for you and your customers.</p>

            <div>
              <ul className="list pl0">
                <li className="bg-light-yellow">ChrisCleans4u</li>
                <li className="bg-light-yellow">1-888-570-5409</li>
                <li className="bg-light-yellow">1234 Really Clean Ave.</li>
                <li className="bg-light-yellow">Mount Pleasant SC 29466</li>
              </ul>
            </div>

          <img src="/static/circleClean.png" />
      </div>


    )
  }
})

module.exports = Contact
