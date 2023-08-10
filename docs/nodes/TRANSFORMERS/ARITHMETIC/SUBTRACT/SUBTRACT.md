---
title: SUBTRACT
description: Effortlessly perform Python-based subtraction calculations with Flojoy's SUBTRACT transformer. Subtract 2 input vectors and return the result.
keyword: [Python, Transform, Arithmetic, Subtract, Subtraction transformer, Python subtraction calculations, Data processing with subtraction, Flojoy SUBTRACT transformer, Streamline data analysis, Arithmetic transformations, Subtraction calculation, Python data manipulation, Accurate data insights, SUBTRACT transformation in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/ARITHMETIC/SUBTRACT/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/ARITHMETIC/SUBTRACT/SUBTRACT.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='SUBTRACT'
    appImg={appImg}
    outputImg={outputImg}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # (Appendix)

## Appendix

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/ARITHMETIC/SUBTRACT/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/ARITHMETIC/SUBTRACT/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/ARITHMETIC/SUBTRACT/appendix/'>{Media}</AppendixSection>