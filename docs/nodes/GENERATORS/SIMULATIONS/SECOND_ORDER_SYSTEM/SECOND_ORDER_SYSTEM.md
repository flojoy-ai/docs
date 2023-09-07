---
title: SECOND_ORDER_SYSTEM
description: The SECOND_ORDER_SYSTEM has a second order exponential function. This node is designed to be used in a Python loop. The data is appended as the loop progresses and written to memory.
keywords: [Python, Simulations, Python second order system simulations, Exponential function, Second-order system analysis, Flojoy generator nodes, Python simulation tools, System simulation examples, Dynamic system design, Python simulation documentation, Second-order system modeling, Dynamic system analysis in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SIMULATIONS/SECOND_ORDER_SYSTEM/examples/EX1/output.jpeg
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
<PythonCode GLink='GENERATORS/SIMULATIONS/SECOND_ORDER_SYSTEM/SECOND_ORDER_SYSTEM.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

### Apply a second order exponential function

<AppDisplay 
    nodeLabel='SECOND_ORDER_SYSTEM'
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

<AppendixSection index={0} folderPath='nodes/GENERATORS/SIMULATIONS/SECOND_ORDER_SYSTEM/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/GENERATORS/SIMULATIONS/SECOND_ORDER_SYSTEM/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/GENERATORS/SIMULATIONS/SECOND_ORDER_SYSTEM/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/GENERATORS/SIMULATIONS/SECOND_ORDER_SYSTEM)
