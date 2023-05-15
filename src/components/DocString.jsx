import React from 'react';

export default function DocString({children}) {

  const ERROR = 'This function does not have a docstring description yet.';

  if( children.trim() === '') {
    return(ERROR);
  }

  return (
    <>
      <blockquote
        style={{
          padding: '0.2rem',
        }}>
        {children}
      </blockquote>
      <br></br>
    </>
  );
}
