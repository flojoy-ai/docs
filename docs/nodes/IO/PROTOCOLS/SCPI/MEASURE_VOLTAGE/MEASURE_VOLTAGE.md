---
title: MEASURE_VOLTAGE
description: Read a voltage from a connected device that supports the SCPI protocol.
keywords: [SCPI, python control, python measurement, python instrument, python voltage]
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
<PythonCode GLink='IO/PROTOCOLS/SCPI/MEASURE_VOLTAGE/MEASURE_VOLTAGE.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

### Send the MEASURE:VOLTAGE:DC command

<AppDisplay 
    nodeLabel='MEASURE_VOLTAGE'
    appImg={appImg}
    outputImg={outputImg}
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

<AppendixSection index={0} folderPath='nodes/IO/PROTOCOLS/SCPI/MEASURE_VOLTAGE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/PROTOCOLS/SCPI/MEASURE_VOLTAGE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/PROTOCOLS/SCPI/MEASURE_VOLTAGE/appendix/'><Media /></AppendixSection>

<!--Add Button here-->
