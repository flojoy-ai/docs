---
title: KEITHLEY2400
description: Efficiently control Keithley 2400 instruments using Python. IV curve measurement with a Keithley 2400 source meter, send voltages and measure currents.
keyword: [Python, Instrument, Keithley 2400 control, Python instrument integration, Measurement and analysis, Python"-"based instrument control, Keithley instrument control, Enhance measurements with Python, Python"-"based measurement techniques, Streamline instrument usage, Accurate data analysis,Python integration with Keithley 2400]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2/examples/EX1/output.jpeg
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
<PythonCode GLink='INSTRUMENTS/KEITHLEY/KEITHLEY2400/KEITHLEY2400.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='KEITHLEY2400'
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

<AppendixSection index={0} folderPath='nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix/'><Media /></AppendixSection>
