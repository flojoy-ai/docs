---
title: SAVGOL
description: Apply a Savitzky-Golay filter to an input signal, which is generally used for smoothing data. The default behaviour is implementing a 3-point moving average of the data.
keyword: [Python, Transform, Signal processing, Savitzky-Golay filter transformer, Signal processing in Python, Data smoothing with SavGol, Python filter calculations, Streamline data analysis, Signal processing transformations, Savitzky-Golay filter design, Python data manipulation, Accurate data insights, Data smoothing using SavGol]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/SIGNAL_PROCESSING/SAVGOL/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/SIGNAL_PROCESSING/SAVGOL/SAVGOL.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='SAVGOL'
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/SIGNAL_PROCESSING/SAVGOL/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/SIGNAL_PROCESSING/SAVGOL/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/SIGNAL_PROCESSING/SAVGOL/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/TRANSFORMERS/SIGNAL_PROCESSING/SAVGOL)
