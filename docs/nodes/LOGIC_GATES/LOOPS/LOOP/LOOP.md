---
title: LOOP
description: Efficiently perform Python-based looping operations with Flojoy's LOOP logic gate that iterates through the body nodes for a given number of times. 
keyword: [Python, Flow, Logic gates, Loop, Loop logic gate, Python loop operations, Data manipulation with looping, Streamline data processing, Loop"-"driven transformations, Looping in Python, Python data analysis, Accurate data insights, Data processing using LOOP logic gate, Data manipulation using looping in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/LOGIC_GATES/LOOPS/LOOP/examples/EX1/output.jpeg
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
<PythonCode GLink='LOGIC_GATES/LOOPS/LOOP/LOOP.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='LOOP'
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

<AppendixSection index={0} folderPath='nodes/LOGIC_GATES/LOOPS/LOOP/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOGIC_GATES/LOOPS/LOOP/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOGIC_GATES/LOOPS/LOOP/appendix/'><Media /></AppendixSection>
