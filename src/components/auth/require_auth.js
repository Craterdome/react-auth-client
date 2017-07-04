import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return (
        <div>
          <ComposedComponent {...this.props}/>
        </div>
      )
    }
  }

  function mapStateToProps({auth: {authenticated}}) {
    return {authenticated};
  }

  return connect(mapStateToProps, {push})(Authentication);
}