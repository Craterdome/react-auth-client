import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {signUpUser} from '../../actions';
import {connect} from 'react-redux';
import {renderField} from '../utils';

class SignUp extends React.Component {
  handleFormSubmit(values) {
    this.props.signUpUser(values);
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
          type="email"
          component={renderField}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          component={renderField}
        />
        <Field
          label="Confirm Password"
          name="passwordConfirm"
          type="password"
          component={renderField}
        />
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.password) {
    errors.password = "Enter a password";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Confirm the password";
  }
  if (values.password != values.passwordConfirm) {
    errors.passwordConfirm = "Passwords must match";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'signup'
})(connect((state) => {
  return {errorMessage: state.auth.error}
}, {signUpUser})(SignUp));