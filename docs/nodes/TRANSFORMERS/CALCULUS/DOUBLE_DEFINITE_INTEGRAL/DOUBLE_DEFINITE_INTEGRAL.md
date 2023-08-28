---
title: DOUBLE_DEFINITE_INTEGRAL
description: The DEFINITE_INTEGRAL node takes a function, upper, and lower bounds as input. It computes double integral of the given function.
keyword: [Python, Transform, Calculus, Definite integral, Double definite integral transformer, Calculus operations in Python, Data integration with Flojoy, Python integration calculations, 
Calculus transformations, Double integral calculation, Python data manipulation, Accurate data insights, Definite integration in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/CALCULUS/DOUBLE_DEFINITE_INTEGRAL/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/CALCULUS/DOUBLE_DEFINITE_INTEGRAL/DOUBLE_DEFINITE_INTEGRAL.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='DOUBLE_DEFINITE_INTEGRAL'
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/CALCULUS/DOUBLE_DEFINITE_INTEGRAL/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/CALCULUS/DOUBLE_DEFINITE_INTEGRAL/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/CALCULUS/DOUBLE_DEFINITE_INTEGRAL/appendix/'><Media /></AppendixSection>
