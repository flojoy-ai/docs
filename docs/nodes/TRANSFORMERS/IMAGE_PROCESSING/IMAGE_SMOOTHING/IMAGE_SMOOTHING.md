---
title: IMAGE_SMOOTHING
description: Apply image smoothing operation on the input DataContainer class, specifically for the image type, represented by the RGB(A) channels. 
keyword: [Python, Transform, Image processing, Image smoothing transformer, Python image processing, Data analysis with image smoothing, Python image filtering techniques, Streamline image analysis, Image processing transformations, Image smoothing algorithms, Python image manipulation, Accurate image insights, Image noise reduction using smoothing]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/IMAGE_PROCESSING/IMAGE_SMOOTHING/examples/EX1/output.jpeg
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
<PythonCode GLink='TRANSFORMERS/IMAGE_PROCESSING/IMAGE_SMOOTHING/IMAGE_SMOOTHING.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='IMAGE_SMOOTHING'
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

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/IMAGE_PROCESSING/IMAGE_SMOOTHING/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/IMAGE_PROCESSING/IMAGE_SMOOTHING/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/IMAGE_PROCESSING/IMAGE_SMOOTHING/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/TRANSFORMERS/IMAGE_PROCESSING/IMAGE_SMOOTHING)
