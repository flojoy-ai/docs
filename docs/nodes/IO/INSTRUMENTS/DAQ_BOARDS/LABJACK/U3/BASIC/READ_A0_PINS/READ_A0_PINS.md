---
title: LABJACKU3
description: In this example, we show how to record and display temperature measurements with a LABJACK U3 device and update them in a Loop.
keyword: [Python, Instrument, LabJack U3 instrument control, Python integration with LabJack, Measurement and analysis, Python-based instrument control, LabJack U3 integration techniques, Python-based measurement techniques, Enhance measurements with Python, Streamline LabJack usage, Accurate data analysis, Python control of LabJack U3]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/INSTRUMENTS/LABJACK/LABJACKU3/examples/EX1/output.jpeg
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
<PythonCode GLink='IO/INSTRUMENTS/DAQ_BOARDS/LABJACK/U3/BASIC/READ_A0_PINS/READ_A0_PINS.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

### Record and display temperature measurements

<AppDisplay
    nodeLabel='READ_A0_PINS'
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

<AppendixSection index={0} folderPath='nodes/IO/INSTRUMENTS/DAQ_BOARDS/LABJACK/U3/BASIC/READ_A0_PINS/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/INSTRUMENTS/DAQ_BOARDS/LABJACK/U3/BASIC/READ_A0_PINS/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/INSTRUMENTS/DAQ_BOARDS/LABJACK/U3/BASIC/READ_A0_PINS/appendix/'><Media /></AppendixSection>

<!--Add Button here-->