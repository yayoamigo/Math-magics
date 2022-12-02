import React, { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = state;
  const handleClick = (e) => { setState(calculate(state, e.target.innerHTML)); };
  return (
    <div className="container">
      <Display value={`${total || ''} ${operation || ''} ${next || ''}`} />
      <div className="regular-btn-line">
        <Buttons onClick={handleClick} color="lightgrey" sign="AC" />
        <Buttons onClick={handleClick} color="lightgrey" sign="+/-" />
        <Buttons conClick={handleClick} color="lightgrey" sign="%" />
        <Buttons onClick={handleClick} color="orange" sign="÷" />
      </div>
      <div className="regular-btn-line">
        <Buttons onClick={handleClick} color="lightgrey" sign="7" />
        <Buttons onClick={handleClick} color="lightgrey" sign="8" />
        <Buttons onClick={handleClick} color="lightgrey" sign="9" />
        <Buttons onClick={handleClick} color="orange" sign="x" />
      </div>
      <div className="regular-btn-line">
        <Buttons onClick={handleClick} color="lightgrey" sign="4" />
        <Buttons onClick={handleClick} color="lightgrey" sign="5" />
        <Buttons onClick={handleClick} color="lightgrey" sign="6" />
        <Buttons onClick={handleClick} color="orange" sign="-" />
      </div>
      <div className="regular-btn-line">
        <Buttons onClick={handleClick} color="lightgrey" sign="1" />
        <Buttons onClick={handleClick} color="lightgrey" sign="2" />
        <Buttons onClick={handleClick} color="lightgrey" sign="3" />
        <Buttons onClick={handleClick} color="orange" sign="+" />
      </div>
      <div className="last-btn-line">
        <Buttons onClick={handleClick} color="lightgrey" sign="0" />
        <Buttons onClick={handleClick} color="lightgrey" sign="." />
        <Buttons onClick={handleClick} color="orange" sign="=" />
      </div>

    </div>
  );
}

export default Calculator;
