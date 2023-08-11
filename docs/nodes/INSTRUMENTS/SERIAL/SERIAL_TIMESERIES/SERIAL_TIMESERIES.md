---
title: SERIAL_TIMESERIES
description:  The SERIAL_TIMESERIES node extracts simple time-dependent 1D data from an Ardunio, or a similar serial device.
keyword: [Python, Instrument, Serial communication timeseries, Python serial data acquisition, Time"-"series data analysis, Python-based serial data collection, Serial data acquisition techniques, Accurate timeseries recording with Python, Enhance data analysis with serial communication, Streamline timeseries data acquisition, Precise data collection using Python, Python control of serial timeseries data]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/examples/EX1/output.jpeg
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
<PythonCode GLink='INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='SERIAL_TIMESERIES'
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

<AppendixSection index={0} folderPath='nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/appendix/'>{Media}</AppendixSection>