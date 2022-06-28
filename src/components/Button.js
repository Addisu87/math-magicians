import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, type }) => (
  <input type="button" value={label} className={`btn-${type}`} />
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
