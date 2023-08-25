---
title: LEAST_SQUARES
description: Enhance regression analysis in Python with Flojoy's LEAST_SQUARES node which will empower you to optimize model accuracy and make data-driven decisions efficiently.
keywords: [AI, ML, Python, Regression, Coefficient, Regression Weights, OrderedPair]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/REGRESSION/LEAST_SQUARES/examples/EX1/output.jpeg
---

[//]: # (Custom component imports)

import DocString from '@site/src/components/DocString';
import PythonCode from '@site/src/components/PythonCode';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # (Docstring)

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='AI_ML/REGRESSION/LEAST_SQUARES/LEAST_SQUARES.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='LEAST_SQUARES'
    appImg={appImg}
    outputImg={outputImg}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # (Appendix)

## Appendix

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

<AppendixSection index={0} folderPath='nodes/AI_ML/REGRESSION/LEAST_SQUARES/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/REGRESSION/LEAST_SQUARES/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/REGRESSION/LEAST_SQUARES/appendix/'><Media /></AppendixSection>