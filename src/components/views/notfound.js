import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <h3>You are lost, <Link to="/">go back home</Link></h3>
    </div>
  )
}