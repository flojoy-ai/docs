---
title: READ_S3
description: The READ_S3 node takes S3_key name, S3 bucket name, and file name as input, and extract the file from the specified bucket using the S3_key that they saved.
keywords: [Python, Extractor, Extract, AWS, S3 file reading, Read data from S3, File extraction from S3, Flojoy Read S3 node, Python S3 data retrieval, S3 file handling, Data extraction from cloud, Python data import from S3, Cloud data processing, Efficient data access from S3]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/EXTRACTORS/FILE/READ_S3/examples/EX1/output.jpeg
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
<PythonCode GLink='EXTRACTORS/FILE/READ_S3/READ_S3.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='READ_S3'
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

<AppendixSection index={0} folderPath='nodes/EXTRACTORS/FILE/READ_S3/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/EXTRACTORS/FILE/READ_S3/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/EXTRACTORS/FILE/READ_S3/appendix/'>{Media}</AppendixSection>