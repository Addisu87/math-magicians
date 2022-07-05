import React, { useState } from 'react';
import styled from 'styled-components';
import RowDisplay from './RowDisplay';
import calculate from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [state, setState] = useState({
    next: null,
    total: null,
    operation: null,
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
    <Wrapper>
      <h5 className="doMath">Let&apos;s do some math!</h5>

      <CalcContainer>
        <RowDisplay next={next} total={total} operation={operation} />

        <div className="rowBtn normal">
          <Button type="button" label="AC" onClick={handleClick} />
          <Button type="button" label="+/-" onClick={handleClick} />
          <Button type="button" label="%" onClick={handleClick} />
          <Button type="operator" label="÷" onClick={handleClick} />
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
      </CalcContainer>
    </Wrapper>
  );
}

export default Calculator;

const Wrapper = styled.div`
  display: flex;
  & .doMath {
    flex: 1;
  }
`;

const CalcContainer = styled.div`
  background-color: var(--bg-color);
  height: 70vh;
  padding: 10px;
  width: 70%;
`;
