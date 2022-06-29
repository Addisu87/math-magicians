import React, { PureComponent } from 'react';

class RowDisplay extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="screen-row">
        <span>{display}</span>
      </div>
    );
  }
}
export default RowDisplay;
