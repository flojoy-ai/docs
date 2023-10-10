import React from 'react';

const UniversalAdmonition = () => {
    return (
        <div className="universal-admonition theme-admonition theme-admonition-info alert alert--info admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
            <div className="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
                <span className="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
                    <svg viewBox="0 0 14 16">
                        <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
                    </svg>
                </span>New to Flojoy?
            </div>
            <div className="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
                <details 
                    className="details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module" data-collapsed="true">
                    <summary><i>Flojoy is a free, open-source replacement for engineering software such as LabVIEW and Simulink.</i></summary>
                    <div>
                        <div className="collapsibleContent_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module">
                            <ol>
                                <li><a href="/getting-started/install/">Download</a> the desktop app</li>
                                <li>Create your <a href="/general-tutorials/introduction/">first flow chart</a></li>
                                <li>Ask questions on the <a href="https://community.flojoy.ai/">Community Forum</a></li>
                            </ol>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    )
}

export default UniversalAdmonition;