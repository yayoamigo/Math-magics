import React from 'react';
import PropTypes from 'prop-types';

export class Display extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (
      <div className="display">
        <p>{value}</p>
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
