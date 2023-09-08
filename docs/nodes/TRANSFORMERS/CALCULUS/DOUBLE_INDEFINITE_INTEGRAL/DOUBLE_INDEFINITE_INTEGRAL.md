---
title: DOUBLE_INDEFINITE_INTEGRAL
description: The DOUBLE_INDEFINITE_INTEGRAL node takes an OrderedTriple (x,y,z) and have the width and height parameter. It computes the double integral approximation according to the matrices dimensions given and it returns a matrix where each cell represents volume up to the given point.
keyword: [Python, Transform, Calculus, Indefinite integral, Double indefinite integral transformer, Calculus operations in Python, Data integration with Flojoy, Python integration calculations, 
Calculus transformations, Double integral calculation, Python data manipulation, Accurate data insights, Indefinite integration in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/CALCULUS/DOUBLE_INDEFINITE_INTEGRAL/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/CALCULUS/DOUBLE_INDEFINITE_INTEGRAL/DOUBLE_INDEFINITE_INTEGRAL.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

### Compute a double integral from x, y, and z

<AppDisplay 
    nodeLabel='DOUBLE_INDEFINITE_INTEGRAL'
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/CALCULUS/DOUBLE_INDEFINITE_INTEGRAL/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/CALCULUS/DOUBLE_INDEFINITE_INTEGRAL/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/CALCULUS/DOUBLE_INDEFINITE_INTEGRAL/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/TRANSFORMERS/CALCULUS/DOUBLE_INDEFINITE_INTEGRAL)
