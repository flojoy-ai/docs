---
title: LOCAL_FILE
description: The LOCAL_FILE node loads a local file of different format and converts it to a DataContainer class.
keyword: [Python, Extractor, Extract, Local file loading, Load data from local files, Data loading from file system, Flojoy Local File Loader, Python local file handling, Data import from local storage, Local data processing, Python file system loader, Efficient data access, Data loading with Flojoy]
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
<PythonCode GLink='LOADERS/LOCAL_FILE_SYSTEM/LOCAL_FILE/LOCAL_FILE.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='LOCAL_FILE'
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

<AppendixSection index={0} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/LOCAL_FILE/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/LOCAL_FILE/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOADERS/LOCAL_FILE_SYSTEM/LOCAL_FILE/appendix/'>{Media}</AppendixSection>