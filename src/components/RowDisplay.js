import React, { PureComponent } from 'react';

class RowDisplay extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      next: '',
      total: null,
      operation: '',
    };
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="screen-row">
        <span>{next || total || operation || '0'}</span>
      </div>
    );
  }
}
export default RowDisplay;
