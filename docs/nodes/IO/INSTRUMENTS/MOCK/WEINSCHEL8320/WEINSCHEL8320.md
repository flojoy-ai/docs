---
title: WEINSCHEL8320
description: In this example, we mock a Weinschel 8320
keyword:
  [
    Python,
    Instrument,
    Weinschel 8320,
    Weinschel 8320 control,
    Python instrument integration,
    Measurement and analysis,
    Python"-"based instrument control,
    Keithley instrument control,
    Enhance measurements with Python,
    Python"-"based measurement techniques,
    Streamline instrument usage,
    Accurate data analysis,
    Python integration with Weinschel 8320,
  ]
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
<PythonCode GLink='IO/INSTRUMENTS/MOCK/WEINSCHEL8320/WEINSCHEL8320.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

### Simulate a Weinschel 8320 attenuator

<AppDisplay
    nodeLabel='WEINSCHEL8320'
    appImg={''}
    outputImg={''}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/IO/INSTRUMENTS/MOCK/WEINSCHEL8320/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/INSTRUMENTS/MOCK/WEINSCHEL8320/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/INSTRUMENTS/MOCK/WEINSCHEL8320/appendix/'><Media /></AppendixSection>

<!--Add Button here-->