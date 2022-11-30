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

// import PropTypes from 'prop-types';

// import React from 'react';

// const Buttons = ({ color, sign }) => (
//   <div className="flex">
//     <button className="btn" style={{ backgroundColor: color }} type="button">{sign}</button>
//   </div>
// );

// export default Buttons;
