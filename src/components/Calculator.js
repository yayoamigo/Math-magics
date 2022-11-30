import React, { PureComponent } from 'react';
import Display from './Display';
import Buttons from './Buttons';

export default class Calculator extends PureComponent {
  render() {
    return (
      <div className="container">
        <Display />
        <div className="regular-btn-line">
          <Buttons color="lightgrey" sign="AC" />
          <Buttons color="lightgrey" sign="+/-" />
          <Buttons color="lightgrey" sign="%" />
          <Buttons color="orange" sign="÷" />
        </div>
        <div className="regular-btn-line">
          <Buttons color="lightgrey" sign="7" />
          <Buttons color="lightgrey" sign="8" />
          <Buttons color="lightgrey" sign="9" />
          <Buttons color="orange" sign="x" />
        </div>
        <div className="regular-btn-line">
          <Buttons color="lightgrey" sign="4" />
          <Buttons color="lightgrey" sign="5" />
          <Buttons color="lightgrey" sign="6" />
          <Buttons color="orange" sign="-" />
        </div>
        <div className="regular-btn-line">
          <Buttons color="lightgrey" sign="1" />
          <Buttons color="lightgrey" sign="2" />
          <Buttons color="lightgrey" sign="3" />
          <Buttons color="orange" sign="+" />
        </div>
        <div className="last-btn-line">
          <Buttons color="lightgrey" sign="0" />
          <Buttons color="lightgrey" sign="." />
          <Buttons color="orange" sign="=" />
        </div>

      </div>
    );
  }
}
