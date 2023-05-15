import React from 'react';
import YAML from 'yaml'

export default function Parameters({children}) {

    const ERROR = 'This node does not currently have any input parameters.';
    const PARAMETERS_KEY = 'parameters';

    if( children.trim() === '') {
        return(ERROR)
    }

    let yaml = YAML.parse(children);

    if( Object.keys(yaml)[0] != PARAMETERS_KEY ) {
        return(ERROR)
    }

    let params = yaml[PARAMETERS_KEY];

    return (
        <div>
            <h3>Input parameters</h3>
            {Object.keys(params).map((key, index) => {
                return (
                    <>
                        <details>
                        <summary key={index}><code>{key}</code></summary>                            
                            <ul>
                                {Object.keys(params[key]).map((k, i) => {
                                    return (
                                        <li key={i}>{k}: {params[key][k]}</li>
                                    )
                                })}
                            </ul>
                        </details>
                    </>
                )
            })}
        </div>
    );
}
