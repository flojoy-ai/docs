---
title: EXTRACT_COLUMNS
description: Efficiently extract specific columns from DataFrames using Python with Flojoy's EXTRACT_COLUMNS node. Streamline data manipulation and analysis.
keywords: [Python, Extractor, Extract, Dataframe column extraction, Python column selection, Efficient data manipulation, Extracting DataFframe columns, Flojoy Extract Columns node, Streamlining data analysis, Python data extraction, Data column filtering, Dataframe column manipulation, Extracting specific columns]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/EXTRACTORS/DATAFRAME/EXTRACT_COLUMNS/examples/EX1/output.jpeg
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
<PythonCode GLink='EXTRACTORS/DATAFRAME/EXTRACT_COLUMNS/EXTRACT_COLUMNS.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

### Extract specific columns from a dataframe

<AppDisplay 
    nodeLabel='EXTRACT_COLUMNS'
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

<AppendixSection index={0} folderPath='nodes/EXTRACTORS/DATAFRAME/EXTRACT_COLUMNS/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/EXTRACTORS/DATAFRAME/EXTRACT_COLUMNS/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/EXTRACTORS/DATAFRAME/EXTRACT_COLUMNS/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/EXTRACTORS/DATAFRAME/EXTRACT_COLUMNS)
