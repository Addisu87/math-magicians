import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, type, onClick }) => (
  <input
    type="button"
    value={label}
    className={`btn-${type}`}
    onClick={onClick}
  />
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
