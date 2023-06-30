import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type DocStringProps = {
  children: string;
};

const STYLES = {
  boxShadow: 0 3px 10px rgb(0 0 0 / 0.2),
  whiteSpace: 'pre-line',
  padding: '20px'
};

export default function DocString({ children }: DocStringProps) {
  const { colorMode } = useColorMode();

  const ERROR = 'This function does not have a docstring description yet.';
  if (children.trim() === '') {
    return (
      <>
        <blockquote>{ERROR}</blockquote>
        <br /> <br />
      </>
    );
  }
  const content = children;

  return (
    <>
      <p style={{'white-space': 'pre-line;'}}>
        {content}
      </p>
      <br></br>
    </>
  );
}
