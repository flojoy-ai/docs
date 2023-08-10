---
title: OPEN_IMAGE
description: The OPEN_IMAGE node loads an image file from disk and returns a image type Datacontainer object.
keywords: [Python, Extractor, Extract, Open image file node, Image file extraction, File manipulation tools, Flojoy Extractors documentation, Python image data extraction, Image file handling, Data extraction from images, Image processing with Flojoy, Image file opening in Python, Extracting image data]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/EXTRACTORS/FILE/OPEN_IMAGE/examples/EX1/output.jpeg
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
<PythonCode GLink='EXTRACTORS/FILE/OPEN_IMAGE/OPEN_IMAGE.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='OPEN_IMAGE'
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

<AppendixSection index={0} folderPath='nodes/EXTRACTORS/FILE/OPEN_IMAGE/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/EXTRACTORS/FILE/OPEN_IMAGE/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/EXTRACTORS/FILE/OPEN_IMAGE/appendix/'>{Media}</AppendixSection>