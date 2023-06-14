import React from 'react';
import YAML from 'yaml';

type ParametersProps = {
	children: string;
};

export default function Parameters({ children }: ParametersProps) {
	const ERROR = 'This node does not currently have any input parameters.';
	if (children.trim() === '') {
		return <blockquote>{ERROR}</blockquote>;
	}

	const params = YAML.parse(children);

	return (
		<div>
			<h3>Input parameters</h3>
			{Object.keys(params).map(key => {
				return (
					<details key={key}>
						<summary>
							<code>{key}</code>
						</summary>
						<ul>
							{Object.keys(params[key]).map(k => {
								return (
									<li key={k}>
										{k} : {JSON.stringify(params[key][k], undefined, 4)}
									</li>
								);
							})}
						</ul>
					</details>
				);
			})}
		</div>
	);
}
