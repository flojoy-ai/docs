---
title: INVERT
description: Takes 2 inputs, one matrix and one rcond if not square matrix, inverts them (or pseudo invert) and returns the result. If the entered value is a scalar it returns the multiplciative inverse 1/x.
keyword: [Python, Transform, Matrix manipulation, Matrix inversion transformer, Python matrix manipulation, Data analysis with matrix inversion, Python matrix calculations, Streamline data manipulation, Matrix transformation techniques, Matrix inversion algorithms, Python data manipulation, Accurate data insights, Matrix inversion for analysis]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/MATRIX_MANIPULATION/INVERT/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/MATRIX_MANIPULATION/INVERT/INVERT.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

### Invert a matrix

<AppDisplay 
    nodeLabel='INVERT'
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/MATRIX_MANIPULATION/INVERT/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/MATRIX_MANIPULATION/INVERT/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/MATRIX_MANIPULATION/INVERT/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/TRANSFORMERS/MATRIX_MANIPULATION/INVERT)
