---
title: OPEN_MATLAB
description: The OPEN_MATLAB node loads a local file of the .mat file format. Note that if multiple tabs of data are used, the number of rows must match in order to stack the arrays.
keyword: [Python, Extractor, Extract, MATLAB, Open MATLAB file node, Load data from MATLAB files, MATLAB data loading, Flojoy Local File Loaders, Python MATLAB file handling, Data import from MATLAB, Local data processing with MATLAB, Python MATLAB loader, Efficient MATLAB data access, Data loading with Flojoy]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/LOADERS/LOCAL_FILE_SYSTEM/LOCAL_FILE/examples/EX1/output.jpeg
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
<PythonCode GLink='LOADERS/LOCAL_FILE_SYSTEM/OPEN_MATLAB/OPEN_MATLAB.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='OPEN_MATLAB'
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

<AppendixSection index={0} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/OPEN_MATLAB/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/OPEN_MATLAB/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/OPEN_MATLAB/appendix/'>{Media}</AppendixSection>