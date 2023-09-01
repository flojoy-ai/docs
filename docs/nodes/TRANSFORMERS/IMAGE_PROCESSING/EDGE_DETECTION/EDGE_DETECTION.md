---
title: EDGE_DETECTION
description: The EDGE_DETECTION node detects edges in the image passed to it. This is done through the the Pillow image filter FIND_EDGES. The image is converted to greyscale during this processing. 
keyword: [Python, Transform, Image processing, Edge detection, Image processing in Python, Data analysis with edge detection, Python edge detection algorithms, Streamline image analysis, Image processing transformations, Edge detection techniques, Python image manipulation, Accurate image insights, Image feature extraction using edges]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/IMAGE_PROCESSING/EDGE_DETECTION/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/IMAGE_PROCESSING/EDGE_DETECTION/EDGE_DETECTION.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='EDGE_DETECTION'
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/IMAGE_PROCESSING/EDGE_DETECTION/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/IMAGE_PROCESSING/EDGE_DETECTION/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/IMAGE_PROCESSING/EDGE_DETECTION/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/TRANSFORMERS/IMAGE_PROCESSING/EDGE_DETECTION)
