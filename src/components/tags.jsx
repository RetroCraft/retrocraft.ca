import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tags, size, className }) => (
  <div className={`tags are-${size} ${className}`}>
    {tags.map(tag => (
      <span className={`tag ${tag.color ? `is-${tag.color}` : ''}`} key={tag.data}>
        {tag.data}
        {tag.small && <>&nbsp;</>}
        <small>{tag.small && `(${tag.small})`}</small>
      </span>
    ))}
  </div>
);

Tags.defaultProps = {
  size: 'medium',
  className: '',
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.string,
      small: PropTypes.string,
      color: PropTypes.string,
    }),
  ).isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Tags;
