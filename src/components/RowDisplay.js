import React from 'react';
import PropTypes from 'prop-types';

const RowDisplay = ({ next = '', total = null, operation = '' }) => (
  <div className="screen-row">
    <span>{next || total || operation || '0'}</span>
  </div>
);

RowDisplay.propTypes = {
  next: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default RowDisplay;
