import React from 'react';
import PropTypes from 'prop-types';

export class Buttons extends React.PureComponent {
  render() {
    const { color, sign, onClick } = this.props;

    return (
      <div className="flex">
        <button onClick={onClick} className="btn" style={{ backgroundColor: color }} type="button">{sign}</button>
      </div>
    );
  }
}

Buttons.propTypes = {
  color: PropTypes.string.isRequired,
  sign: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
