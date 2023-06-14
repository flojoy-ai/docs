import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/hljs/yaml';
import {
	a11yDark,
	a11yLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useColorMode } from '@docusaurus/theme-common';

SyntaxHighlighter.registerLanguage('yaml', yaml);

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
			<SyntaxHighlighter
				language="yaml"
				style={colorMode === 'dark' ? a11yDark : a11yLight}
			>
				{content}
			</SyntaxHighlighter>
			<br></br>
		</>
	);
}
