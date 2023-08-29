---
title: INTEGRATE
description: The Python"-"powered INTEGRATE node takes two lists as input and integrates it using the composite trapezoidal rule.
keyword: [Python, Transform, Calculus, Integrate, Integration transformer, Python integration calculations, Data processing with integration, Flojoy INTEGRATE transformer, Streamline data analysis, Calculus transformations, Integration calculation, Python data manipulation, Accurate data insights, Integration in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/CALCULUS/INTEGRATE/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/CALCULUS/INTEGRATE/INTEGRATE.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='INTEGRATE'
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/CALCULUS/INTEGRATE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/CALCULUS/INTEGRATE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/CALCULUS/INTEGRATE/appendix/'><Media /></AppendixSection>
