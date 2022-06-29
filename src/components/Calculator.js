/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { PureComponent } from 'react';
import Button from './Button';
import RowDisplay from './RowDisplay';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <RowDisplay />

        <div className="rowBtn normal">
          <Button type="button" label="AC" />
          <Button type="button" label="+/-" />
          <Button type="button" label="%" />
          <Button type="operator" label="+" />
        </div>

        <div className="rowBtn normal">
          <Button type="button" label="7" />
          <Button type="button" label="8" />
          <Button type="button" label="9" />
          <Button type="operator" label="x" />
        </div>

        <div className="rowBtn normal">
          <Button type="button" label="4" />
          <Button type="button" label="5" />
          <Button type="button" label="6" />
          <Button type="operator" label="-" />
        </div>

        <div className="rowBtn normal">
          <Button type="button" label="1" />
          <Button type="button" label="2" />
          <Button type="button" label="3" />
          <Button type="operator" label="+" />
        </div>

        <div className="rowBtn double">
          <Button type="button" label="0" />
          <Button type="button" label="." />
          <Button type="operator" label="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
