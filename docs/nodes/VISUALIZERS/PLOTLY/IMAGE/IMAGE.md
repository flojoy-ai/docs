---
title: IMAGE
description: The IMAGE node creates a Plotly image visualization for a given input data container type of image.
keywords: [Python, Visualize, Plotly, Plotly Image visualizer, Python image data visualization, Visualizing images with Plotly, Image plot examples, Flojoy Plotly nodes, Interactive image visualization, Python data visualization tools, Image representation techniques, Plotly for image insights, Image data exploration]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/IMAGE/examples/EX1/output.jpeg
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
<PythonCode GLink='VISUALIZERS/PLOTLY/IMAGE/IMAGE.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='IMAGE'
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

<AppendixSection index={0} folderPath='nodes/VISUALIZERS/PLOTLY/IMAGE/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/VISUALIZERS/PLOTLY/IMAGE/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/VISUALIZERS/PLOTLY/IMAGE/appendix/'>{Media}</AppendixSection>