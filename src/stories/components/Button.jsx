import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({  backgroundColor, label, ...props }) => {
  
  return (
    <button
      type="button"
     
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label} 
    </button>
  );
};

Button.propTypes = {
  
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  
  onClick: undefined,
};
