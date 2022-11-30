import React from 'react';
import PropTypes from 'prop-types';

export class Buttons extends React.PureComponent {
  render() {
    const { color } = this.props;
    const { sign } = this.props;
    return (
      <div className="flex">
        <button className="btn" style={{ backgroundColor: color }} type="button">{sign}</button>
      </div>
    );
  }
}

Buttons.propTypes = {
  color: PropTypes.string.isRequired,
  sign: PropTypes.string.isRequired,
};

export default Buttons;
