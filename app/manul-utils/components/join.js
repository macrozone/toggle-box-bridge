import React from 'react';

const Join = ({ children, separator = <span>, </span> }) => (
  <span>{
    children.map(
      (child, index) => (
        [child, index < children.length - 1 && separator]
      )
    )
  }
  </span>
);

Join.displayName = 'Join';
export default Join;
