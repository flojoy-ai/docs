import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from '@docusaurus/router';

type AppendixSectionProps = {
  children: string;
  index: number;
  folderPath: string;
};

export default function AppendixSection({
  children,
  index,
  folderPath,
}: AppendixSectionProps) {
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

  const boilerplate = [
    'No theory or technical notes have been contributed for this node yet.',
    'This node does not require any peripheral hardware to operate. Please see INSTRUMENTS for nodes that interact with the physical world through connected hardware.',
    'No supporting screenshots, photos, or videos have been added to the media.md file for this node.',
  ];

  const ROOT = 'https://github.com/flojoy-io/docs/tree/main/docs/';

  const fileNames = ['notes.md', 'hardware.md', 'media.md'];
  const sectionStyle = { display: 'inline-block', cursor: 'pointer' };
  const SECTION = sections[index];
  const HREF = ROOT + folderPath + fileNames[index];

  const isDriverDoc =
    typeof children === 'string' && children.includes('Driver doc :');

  return (
    <>
      <br />
      <details>
        <summary>
          <span style={sectionStyle}>
            <h4>{SECTION}</h4>
          </span>
        </summary>
        {isDriverDoc ? null : children !== '' ? (
          <ReactMarkdown skipHtml={false}>{children}</ReactMarkdown>
        ) : (
          <ReactMarkdown skipHtml={false}>{boilerplate[index]}</ReactMarkdown>
        )}
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
