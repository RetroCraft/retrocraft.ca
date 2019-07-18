import React from 'react';
import PropTypes from 'prop-types';

const Highlight = ({
  color, children, as, className, ...props
}) => {
  if (as) {
    const Element = as;
    return (
      <Element {...props} className={className}>
        <span className={`shadow is-${color}`}>{children}</span>
      </Element>
    );
  }
  return <span className={`shadow is-${color} ${className}`} {...props} />;
};

Highlight.defaultProps = {
  className: '',
  as: null,
};

Highlight.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.element,
};

export default Highlight;
