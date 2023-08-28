import React from 'react';
import { useLocation } from '@docusaurus/router';

type AppendixSectionProps = {
  children: React.ReactNode;
  index: number;
  folderPath: string;
};

export default function AppendixSection({
  children,
  index,
  folderPath,
}: AppendixSectionProps) {
  // FIXME: Clean this up this is kinda dirty
  const location = useLocation();

  const isIONode = location.pathname.indexOf('INSTRUMENTS') !== -1;

  // Don't display hardware info on non IO nodes
  if (!isIONode && index === 1) {
    return null;
  }

  const sections = [
    'Theory and technical notes',
    'Parts list and drivers',
    'Media',
  ];

  const ROOT = 'https://github.com/flojoy-io/docs/tree/main/docs/';

  const fileNames = ['notes.md', 'hardware.md', 'media.md'];
  const sectionStyle = { display: 'inline-block', cursor: 'pointer' };
  const SECTION = sections[index];
  const HREF = ROOT + folderPath + fileNames[index];

  return (
    <>
      <br />
      <details>
        <summary>
          <span style={sectionStyle}>
            <h4>{SECTION}</h4>
          </span>
        </summary>
        {children}
        <br />
        <small>
          <i>
            <a href={HREF}>Edit {fileNames[index]} on GitHub</a>
          </i>
        </small>
      </details>
      <hr />
    </>
  );
}
