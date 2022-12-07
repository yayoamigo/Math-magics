import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ color, sign, onClick }) {
  return (
    <div className="flex">
      <button onClick={onClick} className="btn" style={{ backgroundColor: color }} type="button">{sign}</button>
    </div>
  );
}

Buttons.propTypes = {
  color: PropTypes.string.isRequired,
  sign: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
