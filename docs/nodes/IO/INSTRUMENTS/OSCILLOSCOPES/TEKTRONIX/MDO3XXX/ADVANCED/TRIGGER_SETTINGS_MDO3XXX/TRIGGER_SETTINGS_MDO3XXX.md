---
title: TRIGGER_SETTINGS_MDO3XXX
description: The TRIGGER_SETTINGS_MDO3XXX node can extract many trace measurements from the MDO3000 series oscilloscopes.
keywords: [oscilloscope, python, extract, control, instrument, triggering]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/TRIGGER_SETTINGS_MDO3XXX/examples/EX1/output.jpeg
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
<PythonCode GLink='IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/TRIGGER_SETTINGS_MDO3XXX/TRIGGER_SETTINGS_MDO3XXX.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

### Set the triggering channel for an oscilloscope

<AppDisplay 
    nodeLabel='TRIGGER_SETTINGS_MDO3XXX'
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

<AppendixSection index={0} folderPath='nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/TRIGGER_SETTINGS_MDO3XXX/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/TRIGGER_SETTINGS_MDO3XXX/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/TRIGGER_SETTINGS_MDO3XXX/appendix/'><Media /></AppendixSection>

<!--Add Button here-->