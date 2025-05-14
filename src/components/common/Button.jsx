// src/components/common/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component with various variants and sizes
 * @component
 */
const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  ...props
}) => {
  // Base button classes
  const baseClasses = 'btn';
  
  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Combined classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} ${disabledClasses} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** HTML button type */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Button style variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  /** Button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
};

export default Button;