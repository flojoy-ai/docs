---
title: SERIAL_SINGLE_MEASUREMENT
description:  In this example, we use the SERIAL_SINGLE_MEASUREMENT node to extract some measurements received from an Arduino microcontroller and visualize the output.
keyword: [Python, Instrument, Serial communication measurement, Python serial instrument integration, Data acquisition and analysis, Python"-"based serial measurement, Serial instrument integration techniques, Accurate measurement with Python, Enhance measurement with serial communication, Streamline data acquisition, Precise measurement using Python, Python control of serial single measurement]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/examples/EX1/output.jpeg
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
<PythonCode GLink='IO/PROTOCOLS/SERIAL/BASIC/SINGLE_MEASUREMENT/SINGLE_MEASUREMENT.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

### Extract measurements from an Arduino microcontroller

<AppDisplay
    nodeLabel='SINGLE_MEASUREMENT'
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

<AppendixSection index={0} folderPath='nodes/IO/PROTOCOLS/SERIAL/BASIC/SINGLE_MEASUREMENT/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/PROTOCOLS/SERIAL/BASIC/SINGLE_MEASUREMENT/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/PROTOCOLS/SERIAL/BASIC/SINGLE_MEASUREMENT/appendix/'><Media /></AppendixSection>

<!--Add Button here-->