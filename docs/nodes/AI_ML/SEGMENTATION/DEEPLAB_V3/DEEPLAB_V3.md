---
title: DEEPLAB_V3
description: Master image segmentation in Python with Flojoy's DEEPLAB_V3 node. Unlock precise object detection and semantic segmentation capabilities for AI/ML projects.
keywords: [AI, ML, Python, Segmentation, DataContainer]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/SEGMENTATION/DEEPLAB_V3/examples/EX1/output.jpeg
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
<PythonCode GLink='AI_ML/SEGMENTATION/DEEPLAB_V3/DEEPLAB_V3.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

### Produce a segmentation mask from an image

<AppDisplay 
    nodeLabel='DEEPLAB_V3'
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

<AppendixSection index={0} folderPath='nodes/AI_ML/SEGMENTATION/DEEPLAB_V3/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/SEGMENTATION/DEEPLAB_V3/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/SEGMENTATION/DEEPLAB_V3/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/AI_ML/SEGMENTATION/DEEPLAB_V3)
