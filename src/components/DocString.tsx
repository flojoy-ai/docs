import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type DocStringProps = {
  children: string;
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
      <p>
        {content}
      </p>
      <br></br>
    </>
  );
}
