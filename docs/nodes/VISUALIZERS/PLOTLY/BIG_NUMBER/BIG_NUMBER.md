---
title: BIG_NUMBER
description: Enhance data presentation using Python with Flojoy's Plotly Big Number visualizer. Create impactful visualizations for large numerical insights.
keywords: [Python, Visualize, Plotly, Plotly Big Number visualizer, Python numerical visualization, Large numerical insights, Big Number visualization examples, Flojoy Plotly nodes, Data presentation tools, Python data visualization, Numerical data representation, Visualizing data with Plotly, Impactful numerical insights]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/BIG_NUMBER/examples/EX1/output.jpeg
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
<PythonCode GLink='VISUALIZERS/PLOTLY/BIG_NUMBER/BIG_NUMBER.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import appImgLight from './examples/EX1/app_light.jpeg'
import outputImg from './examples/EX1/output.jpeg'
import outputLight from './examples/EX1/output_light.jpeg'

### Create a Plotly Big Number visualization

<AppDisplay 
    nodeLabel='BIG_NUMBER'
    appImg={appImg}
    appLight={appImgLight}
    outputLight={outputLight}
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

<AppendixSection index={0} folderPath='nodes/VISUALIZERS/PLOTLY/BIG_NUMBER/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/VISUALIZERS/PLOTLY/BIG_NUMBER/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/VISUALIZERS/PLOTLY/BIG_NUMBER/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/VISUALIZERS/PLOTLY/BIG_NUMBER)