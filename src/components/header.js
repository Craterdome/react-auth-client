import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={0}>
          {this.props.user.email}
        </li>,
        <li className="nav-item" key={1}>
          <NavLink className="nav-link" to="/signout">Sign out</NavLink>
        </li>
      ];
    } else {
      return [
        <li className="nav-item" key={0}>
          <NavLink className="nav-link" to="/signin">Sign in</NavLink>
        </li>,
        <li className="nav-item" key={1}>
          <NavLink className="nav-link" to="/signup">Sign up</NavLink>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light navbar-toggleable-md">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({auth: {authenticated, user}}) {
  return {authenticated, user};
}

export default connect(mapStateToProps)(Header);