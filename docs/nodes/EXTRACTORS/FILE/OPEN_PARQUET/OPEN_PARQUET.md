---
title: OPEN_PARQUET
description: The OPEN_PARQUET node loads a local file of the .parquet file format. It returns the file in pandas.Dataframe type format.
keywords: [Python, Extractor, Extract, Open Parquet file node, Parquet file extraction, File manipulation tools, Flojoy Extractors documentation, Python Parquet data extraction, Parquet file handling, Data extraction from Parquet, Parquet processing with Flojoy, Parquet file opening in Python, Extracting Parquet data]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/EXTRACTORS/FILE/OPEN_PARQUET/examples/EX1/output.jpeg
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
<PythonCode GLink='EXTRACTORS/FILE/OPEN_PARQUET/OPEN_PARQUET.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='OPEN_PARQUET'
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

<AppendixSection index={0} folderPath='nodes/EXTRACTORS/FILE/OPEN_PARQUET/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/EXTRACTORS/FILE/OPEN_PARQUET/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/EXTRACTORS/FILE/OPEN_PARQUET/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/EXTRACTORS/FILE/OPEN_PARQUET)
