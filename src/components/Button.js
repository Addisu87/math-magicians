import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => <input type="button" value={props.label} />;

Button.propTypes = {
  label: PropTypes.string.isRequired
};

export default Button;
