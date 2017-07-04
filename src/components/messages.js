import React from 'react';
import {connect} from 'react-redux';

class Messages extends React.Component {
  renderMessage({id, title, message, type = 'info', closeable=false}) {
    return (
      <div className={`alert alert-${type}`}>
        {title && <strong>{title}</strong>}
        {message}
        {closeable && (
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        )}
      </div>
    );
  }

  render() {
    return <div>{this.props.messages.map(this.renderMessage)}</div>
  }
}

function mapStateToProps({messages}) {
  return {messages};
}

export default connect(mapStateToProps)(Messages);