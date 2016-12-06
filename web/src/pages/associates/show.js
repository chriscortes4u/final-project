const React = require('react')
const data = require('../../utils/data')()

const Associate = React.createClass({
  getInitialState() {
    return {
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
    }
  },
  componentDidMount(){
    data.get('associates', this.props.prams.id)
    .then(associate => this.setState({ associate}))
  },
  render () {
    return (

      <div>
        {this.state.associate.id}
      </div>

    )
  }
})

module.exports = Associate
