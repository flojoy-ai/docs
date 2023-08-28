---
title: HISTOGRAM
description: The HISTOGRAM node creates a Plotly Histogram visualization for a given input data container.
keywords: [Python, Visualize, Plotly, Plotly Histogram visualizer, Python histogram chart, Data distribution visualization, Histogram plot examples, Flojoy Plotly nodes, Interactive data visualization, Python data analysis tools, Histogram representation, Visualizing data with Plotly, Data distribution insights]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/HISTOGRAM/examples/EX1/output.jpeg
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
<PythonCode GLink='VISUALIZERS/PLOTLY/HISTOGRAM/HISTOGRAM.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='HISTOGRAM'
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

<AppendixSection index={0} folderPath='nodes/VISUALIZERS/PLOTLY/HISTOGRAM/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/VISUALIZERS/PLOTLY/HISTOGRAM/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/VISUALIZERS/PLOTLY/HISTOGRAM/appendix/'><Media /></AppendixSection>
