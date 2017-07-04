import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {signInUser} from '../../actions';
import {renderField} from '../utils';

class SignIn extends React.Component {
  handleFormSubmit({email, password}) {
    this.props.signInUser({email, password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          label="Email"
          name="email"
          component={renderField}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          component={renderField}
        />
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

export default reduxForm({form: 'signin'})(connect((state) => {
  return {errorMessage: state.auth.error}
}, {signInUser})(SignIn));