---
title: PROPHET_COMPONENTS
description: Explore Python-powered Prophet components visualization in Flojoy. Master dynamic insights into time series forecasting components.
keywords: [Python, Visualize, Plotly, Plotly Prophet Components visualizer, Python time series visualization, Dynamic Prophet components insight, Plotly time series plot examples, Flojoy Plotly nodes, Interactive time series visualization, Python data visualization tools, Time series components representation, Visualizing Prophet components with Plotly, Time series analysis using Prophet]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/PROPHET_COMPONENTS/examples/EX1/output.jpeg
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
<PythonCode GLink='VISUALIZERS/PLOTLY/PROPHET_COMPONENTS/PROPHET_COMPONENTS.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='PROPHET_COMPONENTS'
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

<AppendixSection index={0} folderPath='nodes/VISUALIZERS/PLOTLY/PROPHET_COMPONENTS/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/VISUALIZERS/PLOTLY/PROPHET_COMPONENTS/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/VISUALIZERS/PLOTLY/PROPHET_COMPONENTS/appendix/'>{Media}</AppendixSection>