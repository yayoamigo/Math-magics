import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ value }) {
  return (
    <div className="display">
      <p>{value}</p>
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};
