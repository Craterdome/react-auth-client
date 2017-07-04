import React from 'react'
import {connect} from 'react-redux'
import {signOutUser} from '../../actions'

class SignOut extends React.Component {
  componentDidMount() {
    this.props.signOutUser()
  }

  render() {
    return <div>Goodbye, so long, farewell...</div>
  }
}

export default connect(null, {signOutUser})(SignOut)