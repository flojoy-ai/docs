---
title: READ_CSV
description: Efficiently read CSV files from local disk or URL using Python with Flojoy's Read CSV node. Simplify data extraction and manipulation for enhanced analysis.
keywords: [Python, Extractor, Extract, CSV file reading, Python CSV extraction, Data extraction from CSV, Flojoy Read CSV node, Efficient data manipulation, CSV file handling, Python data extraction, Data analysis with CSV, CSV data processing, CSV data import in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/EXTRACTORS/FILE/READ_CSV/examples/EX1/output.jpeg
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
<PythonCode GLink='EXTRACTORS/FILE/READ_CSV/READ_CSV.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='READ_CSV'
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

<AppendixSection index={0} folderPath='nodes/EXTRACTORS/FILE/READ_CSV/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/EXTRACTORS/FILE/READ_CSV/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/EXTRACTORS/FILE/READ_CSV/appendix/'>{Media}</AppendixSection>