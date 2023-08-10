---
title: APPEND
description: The APPEND node appends a single data point to an array. The large array must be passed to the bottom array connection. For ordered pair, the single point must have a shape of 1 (or (1,)).
keyword: [Python, Flow, Logic gates, Loop, Loop"-"based appending, Python loop operations, Data manipulation with appending, Streamline data processing, Loop"-"driven transformations, Appending in Python loops, Python data analysis, Accurate data insights, Data processing using loop"-"based append, Data manipulation using APPEND in loops]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/LOGIC_GATES/LOOPS/APPEND/examples/EX1/output.jpeg
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
<PythonCode GLink='LOGIC_GATES/LOOPS/APPEND/APPEND.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='APPEND'
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

<AppendixSection index={0} folderPath='nodes/LOGIC_GATES/LOOPS/APPEND/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOGIC_GATES/LOOPS/APPEND/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOGIC_GATES/LOOPS/APPEND/appendix/'>{Media}</AppendixSection>