const React = require('react')
const {Redirect} = require('react-router')
const data = require('../../utils/data')()

const MemberForm = React.createClass({
  getInitialState(){
    return ({
      error:"",
      result:{},
      member: {
        id:"",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        package: ""
      }
    })
  },
  handleChange(field){
    return (e) => {
      var member = this.state.member
      member[field] = e.target.value
      this.setState({member})
    }
  },
  handleSubmit(e){
    e.preventDefault()
    data.post('members', this.state.member)
      .then(res => this.setState({resolved: true}))
  },
  render(){
    return(
      <div>
      {this.state.resolved ? <Redirect to="/members" /> : null}
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
          {JSON.stringify(this.state.member, null, 2)}
        </pre> */}
      </div>
    )
  }
})

module.exports = MemberForm
