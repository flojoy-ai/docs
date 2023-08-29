---
title: DIFFERENTIATE
description: The Python powered DIFFERENTIATE node takes two list, x and y, as input. It computes the derivative of the array, y with respect to x.
keyword: [Python, Transform, Calculus, Differentiate, Differentiation transformer, Calculus operations in Python, Data differentiation with Flojoy, Python differentiation calculations, Streamline data analysis, Calculus transformations, Differential calculus, Python data manipulation, Accurate data insights, Differentiation in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/CALCULUS/DIFFERENTIATE/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/CALCULUS/DIFFERENTIATE/DIFFERENTIATE.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='DIFFERENTIATE'
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/CALCULUS/DIFFERENTIATE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/CALCULUS/DIFFERENTIATE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/CALCULUS/DIFFERENTIATE/appendix/'><Media /></AppendixSection>
