/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { PureComponent } from 'react';
import Button from './Button';
import RowDisplay from './RowDisplay';
import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((state) =>
      calculate(
        {
          total: state.total,
          next: state.next,
          operation: state.operation
        },
        e.target.innerHTML
      )
    );
  };

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="container">
        <RowDisplay next={next} total={total} operation={operation} />

        <div className="rowBtn normal">
          <Button type="button" label="AC" onClick={this.handleClick} />
          <Button type="button" label="+/-" onClick={this.handleClick} />
          <Button type="button" label="%" onClick={this.handleClick} />
          <Button type="operator" label="+" onClick={this.handleClick} />
        </div>

        <div className="rowBtn normal">
          <Button type="button" label="7" onClick={this.handleClick} />
          <Button type="button" label="8" onClick={this.handleClick} />
          <Button type="button" label="9" onClick={this.handleClick} />
          <Button type="operator" label="x" onClick={this.handleClick} />
        </div>

        <div className="rowBtn normal">
          <Button type="button" label="4" onClick={this.handleClick} />
          <Button type="button" label="5" onClick={this.handleClick} />
          <Button type="button" label="6" onClick={this.handleClick} />
          <Button type="operator" label="-" onClick={this.handleClick} />
        </div>

        <div className="rowBtn normal">
          <Button type="button" label="1" onClick={this.handleClick} />
          <Button type="button" label="2" onClick={this.handleClick} />
          <Button type="button" label="3" onClick={this.handleClick} />
          <Button type="operator" label="+" onClick={this.handleClick} />
        </div>

        <div className="rowBtn double">
          <Button type="button" label="0" onClick={this.handleClick} />
          <Button type="button" label="." onClick={this.handleClick} />
          <Button type="operator" label="=" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
