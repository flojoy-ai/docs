import React from 'react';

export default function DocString({ children }) {
	const ERROR = 'This function does not have a docstring description yet.';

	if (children.trim() === '') {
		return ERROR;
	}
  const content = children.split('\n').map(l=> l.trimStart()).join("\n")

	return (
		<>
			<blockquote
				style={{
					padding: '0.5rem',
				}}
			>
				<pre>{content}</pre>
			</blockquote>
			<br></br>
		</>
	);
}
