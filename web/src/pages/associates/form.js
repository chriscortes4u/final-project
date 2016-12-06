const React = require('react')
const {Redirect} = require('react-router')
const data = require('../../utils/data')()

const AssociateForm = React.createClass({
  getInitialState(){
    return ({
      error:"",
      result:{},
      associate: {
        id:"",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        dob: "",
        email: ""
      }
    })
  },
  handleChange(field){
    return (e) => {
      var associate = this.state.associate
      person[field] = e.target.value
      this.setState({associate})
    }
  },
  handleSubmit(e){
    e.preventDefault()
    data.post('associates', this.state.associate)
      .then(res => this.setState({resolved: true}))
  },
  render(){
    return(
      <div>
      {this.state.resolved ? <Redirect to="/associates" /> : null}
      {this.state.error}
      {JSON.stringify(this.state.result, null, 2)}
        <h1>Here</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
            first name
            </label>
            <input
            value={this.state.firstName}
            onChange={this.handleChange('firstName')} />
          </div>
          <div>
            <label>
            last name
            </label>
            <input
            value={this.state.lastName}
            onChange={this.handleChange('lastName')}  />
          </div>
          <div>
            <label>
              phone
            </label>
            <input
            value={this.state.phone}
            onChange={this.handleChange('phone')}/>
          </div>
          <div>
            <label>
              email
            </label>
            <input
            value={this.state.email}
              onChange={this.handleChange('email')}/>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        {/* <pre>
          {JSON.stringify(this.state.associate, null, 2)}
        </pre> */}
      </div>
    )
  }
})

module.exports = AssociateForm
