// /* eslint-disable react/prefer-stateless-function */
// /* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
import Button from './Button';
import RowDisplay from './RowDisplay';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    next: '',
    total: null,
    operation: '',
  });
  const handleClick = (e) => {
    setState((state) => calculate(
      {
        next: state.next,
        total: state.total,
        operation: state.operation,
      },
      e.target.value,
    ));
  };

  const { next, total, operation } = state;
  return (
    <div className="container">
      <RowDisplay next={next} total={total} operation={operation} />

      <div className="rowBtn normal">
        <Button type="button" label="AC" onClick={handleClick} />
        <Button type="button" label="+/-" onClick={handleClick} />
        <Button type="button" label="%" onClick={handleClick} />
        <Button type="operator" label="+" onClick={handleClick} />
      </div>

      <div className="rowBtn normal">
        <Button type="button" label="7" onClick={handleClick} />
        <Button type="button" label="8" onClick={handleClick} />
        <Button type="button" label="9" onClick={handleClick} />
        <Button type="operator" label="x" onClick={handleClick} />
      </div>

      <div className="rowBtn normal">
        <Button type="button" label="4" onClick={handleClick} />
        <Button type="button" label="5" onClick={handleClick} />
        <Button type="button" label="6" onClick={handleClick} />
        <Button type="operator" label="-" onClick={handleClick} />
      </div>

      <div className="rowBtn normal">
        <Button type="button" label="1" onClick={handleClick} />
        <Button type="button" label="2" onClick={handleClick} />
        <Button type="button" label="3" onClick={handleClick} />
        <Button type="operator" label="+" onClick={handleClick} />
      </div>

      <div className="rowBtn double">
        <Button type="button" label="0" onClick={handleClick} />
        <Button type="button" label="." onClick={handleClick} />
        <Button type="operator" label="=" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
