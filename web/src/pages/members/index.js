const React = require('react');

const Members = React.createClass({
componentDidMount(){
  this.props.db.all((err, response, body) =>{
    if (err) return console.log(err)
    console.log(body)
  })
},

  render(){
    return(
      <div>
        <h3>Members</h3>
        <ul>
          <li>Member 1</li>
          <li>Member 2</li>
          <li>Member 3</li>
        </ul>
      </div>
    )
  }
})

module.exports= Members
