---
title: PHIDGET22
description: This example shows how to use the PHIDGET22 node to measure pressures from Flexiforce sensors using a Phidget Interface Kit.
keyword: [Python, Instrument, Phidget22 instrument control, Python integration with Phidget, Measurement and analysis, Python-based instrument control, Phidget22 integration techniques, Python-based measurement techniques, Enhance measurements with Python, Streamline Phidget usage, Accurate data analysis, Python control of Phidget22]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/INSTRUMENTS/PHIDGET/PHIDGET22/examples/EX1/output.jpeg
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
<PythonCode GLink='IO/INSTRUMENTS/DAQ_BOARDS/PHIDGET/INTERFACEKIT/BASIC/READ_N_PINS/READ_N_PINS.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

### Measure pressures from Flexiforce sensors

<AppDisplay
    nodeLabel='READ_N_PINS'
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

<AppendixSection index={0} folderPath='nodes/IO/INSTRUMENTS/DAQ_BOARDS/PHIDGET/INTERFACEKIT/BASIC/READ_N_PINS/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/INSTRUMENTS/DAQ_BOARDS/PHIDGET/INTERFACEKIT/BASIC/READ_N_PINS/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/INSTRUMENTS/DAQ_BOARDS/PHIDGET/INTERFACEKIT/BASIC/READ_N_PINS/appendix/'><Media /></AppendixSection>

<!--Add Button here-->