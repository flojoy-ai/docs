import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { GitHubNodeRepo } from '../utils/helper';

type PythonCodeProps = {
  GLink: string;
  children: string;
};

export default function PythonCode({ GLink, children }: PythonCodeProps) {
  let code = children;

  if (code.includes('"""')) {
    // Remove docstring

    let beforeDocstring = code.split('"""')[0];
    let afterDocstring = code.split('"""')[2];

    code =
      beforeDocstring.trimEnd() +
      afterDocstring.trimStart().replace('\n\n', '\n');
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <h3 style={{ marginBottom: 0 }}>Python code</h3>
        <a
          href={`${GitHubNodeRepo}/${GLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__item navbar__link header-github-link"
          aria-label="GitHub repository"
          style={{
            padding: '5px',
          }}
        >
          Github
          <svg
            width="13.5"
            height="13.5"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"
          >
            <path
              fill="currentColor"
              d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
            ></path>
          </svg>
        </a>
      </div>
      <details>
        <CodeBlock className="language-python">{code}</CodeBlock>
      </details>
      <br></br>
    </div>
  );
}
