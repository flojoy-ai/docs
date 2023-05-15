import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function PythonCode({children}) {

    let code = children;

    if( code.includes('"""') ) {
        // Remove docstring

        let beforeDocstring = code.split('"""')[0];
        let afterDocstring = code.split('"""')[2];
        
        code = beforeDocstring.trimEnd() +
                afterDocstring.trimStart().replace('\n\n', '\n');
    }

    return (
        <div>
            <h3>Python code</h3>
            <details open>
                <CodeBlock className="language-python">
                    {code}
                </CodeBlock>
            </details>
            <br></br>
        </div>
    );
}
