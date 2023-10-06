---
title: SURFACE3D
description: The SURFACE3D node creates a Plotly 3D Surface visualization for a given input DataContainer.
keywords: [Python, Visualize, Plotly, 3D, Plotly Surface3D visualizer, Python 3D surface plot tool, Three-dimensional data visualization, Surface3D plot examples, Flojoy Plotly nodes, Interactive 3D surface charts, Python data visualization, 3D surface plot creation, Visualizing data with Plotly, Three-dimensional data analysis]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/SURFACE3D/examples/EX1/output.jpeg
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
<PythonCode GLink='VISUALIZERS/PLOTLY/SURFACE3D/SURFACE3D.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import appImgLight from './examples/EX1/app_light.jpeg'
import outputImg from './examples/EX1/output.jpeg'
import outputLight from './examples/EX1/output_light.jpeg'

### Create a Plotly 3d Surface visualization

<AppDisplay 
    nodeLabel='SURFACE3D'
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

<AppendixSection index={0} folderPath='nodes/VISUALIZERS/PLOTLY/SURFACE3D/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/VISUALIZERS/PLOTLY/SURFACE3D/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/VISUALIZERS/PLOTLY/SURFACE3D/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/VISUALIZERS/PLOTLY/SURFACE3D)