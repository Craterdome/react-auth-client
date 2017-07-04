import React from 'react';
import {connect} from 'react-redux';
import RequireAuth from '../auth/require_auth';
import {fetchMessage} from '../../actions';

class Feature extends React.Component {
  componentDidMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <p>This is a feature</p>
    )
  }
}

export default connect(null, {fetchMessage})(RequireAuth(Feature))