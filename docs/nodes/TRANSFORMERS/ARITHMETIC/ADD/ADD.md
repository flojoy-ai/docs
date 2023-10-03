---
title: ADD
description: Add 2 or more numeric arrays, matrices, dataframes, or constants element-wise. When a constant is added to an array or matrix, each element in the array or matrix will be increased by the constant value.
keyword: [Python, Transform, Arithmetic, Addition transformer, Python addition calculations, Data processing with addition, Flojoy ADD transformer, Streamline data analysis, Arithmetic transformations, Addition calculation, Python data manipulation, Accurate data insights, ADD transformation in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/ARITHMETIC/ADD/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/ARITHMETIC/ADD/ADD.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import appImgLight from './examples/EX1/app_light.jpeg'
import outputImg from './examples/EX1/output.jpeg'
import outputLight from './examples/EX1/output_light.jpeg'

### Add different inputs

<AppDisplay 
    nodeLabel='ADD'
    appImg={appImg}
    appLight={appImgLight}
    outputLight={outputLight}
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/ARITHMETIC/ADD/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/ARITHMETIC/ADD/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/ARITHMETIC/ADD/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/TRANSFORMERS/ARITHMETIC/ADD)
