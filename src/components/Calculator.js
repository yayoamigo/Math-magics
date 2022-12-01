import React, { PureComponent } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

 handleClick = (e) => {
   this.setState((state) => calculate(state, e.target.innerHTML));
 }

 render() {
   const { total, next, operation } = this.state;
   return (
     <div className="container">
       <Display value={`${total || ''} ${operation || ''} ${next || ''}`} />
       <div className="regular-btn-line">
         <Buttons onClick={this.handleClick} color="lightgrey" sign="AC" />
         <Buttons onClick={this.handleClick} color="lightgrey" sign="+/-" />
         <Buttons conClick={this.handleClick} color="lightgrey" sign="%" />
         <Buttons onClick={this.handleClick} color="orange" sign="÷" />
       </div>
       <div className="regular-btn-line">
         <Buttons onClick={this.handleClick} color="lightgrey" sign="7" />
         <Buttons onClick={this.handleClick} color="lightgrey" sign="8" />
         <Buttons onClick={this.handleClick} color="lightgrey" sign="9" />
         <Buttons onClick={this.handleClick} color="orange" sign="x" />
       </div>
       <div className="regular-btn-line">
         <Buttons onClick={this.handleClick} color="lightgrey" sign="4" />
         <Buttons onClick={this.handleClick} color="lightgrey" sign="5" />
         <Buttons onClick={this.handleClick} color="lightgrey" sign="6" />
         <Buttons onClick={this.handleClick} color="orange" sign="-" />
       </div>
       <div className="regular-btn-line">
         <Buttons onClick={this.handleClick} color="lightgrey" sign="1" />
         <Buttons onClick={this.handleClick} color="lightgrey" sign="2" />
         <Buttons onClick={this.handleClick} color="lightgrey" sign="3" />
         <Buttons onClick={this.handleClick} color="orange" sign="+" />
       </div>
       <div className="last-btn-line">
         <Buttons onClick={this.handleClick} color="lightgrey" sign="0" />
         <Buttons onClick={this.handleClick} color="lightgrey" sign="." />
         <Buttons onClick={this.handleClick} color="orange" sign="=" />
       </div>

     </div>
   );
 }
}
