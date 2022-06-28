import React from 'react';
import './Calculator.css';
import OutputScreen from './OutputScreen';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <OutputScreen />
        <div className="rowBtn">
          <Button variant="contained" label="AC" />
          <Button variant="contained" label="+/-" />
          <Button variant="contained" label="%" />
          <Button variant="contained" label="+" />
        </div>

        <div className="rowBtn">
          <Button variant="contained" label="7" />
          <Button variant="contained" label="8" />
          <Button variant="contained" label="9" />
          <Button variant="contained" label="x" />
        </div>

        <div className="rowBtn">
          <Button variant="contained" label="4" />
          <Button variant="contained" label="5" />
          <Button variant="contained" label="6" />
          <Button variant="contained" label="-" />
        </div>

        <div className="rowBtn">
          <Button variant="contained" label="1" />
          <Button variant="contained" label="2" />
          <Button variant="contained" label="3" />
          <Button variant="contained" label="+" />
        </div>

        <div className="rowBtn">
          <Button variant="contained" label="0" />
          <Button variant="contained" label="." />
          <Button variant="contained" label="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
