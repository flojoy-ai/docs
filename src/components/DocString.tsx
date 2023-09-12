import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import highlight from 'custom-syntax-highlighter';
import useIsBrowser from '@docusaurus/useIsBrowser';

type DocStringProps = {
  children: string;
};

const STYLES = {
  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  whiteSpace: 'pre-line',
  padding: '20px',
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

  const patterns = [
    {
      name: 'string',
      match: /^(\'[^\'\n]*\')/,
    },
    {
      name: 'fn-call',
      match: [/^([A-z_]+)\(/, '', '('],
    },
    {
      name: 'dashes',
      match: /^([-]{4,})/,
    },
    {
      name: 'before-colon',
      match: /^(\n[a-zA-Z]+)(?=\s*:\s*)/,
    },
    {
      name: 'snake-case',
      match: /^([a-z]+(_[a-z]+))/,
    },
    {
      name: 'sections',
      match: /^(Returns|Parameters|Inputs)/,
    },
    {
      name: 'node-names',
      match: /^([A-Z]+(_[A-Z]+))/,
    },
    {
      name: 'all-caps',
      match: /^([A-Z]{3,})/,
    },
    {
      name: 'data-container-type',
      match:
        /^(OrderedPair|DataFrame|OrderedTriple|Greyscale|Matrix|Image|Scalar|DataContainer|Vector)/,
    },
  ];

  const isBrowser = useIsBrowser();
  if (isBrowser) {
    try {
      highlight({ patterns: patterns });
    } catch (e) {
      console.warn('Docstring highlight failed ', e);
    }
  }

  const formatted = content
    .split('\n')
    .map(line => {
      // strip leading 4 characters of the line if its all spaces
      // for text alignment purposes
      const leading = line.slice(0, 4);
      if (leading.trim() === '') {
        return line.slice(4);
      }
      return line;
    })
    .join('\n');

  return (
    <>
      <pre>
        <code>{formatted}</code>
      </pre>
      <br></br>
    </>
  );
}
