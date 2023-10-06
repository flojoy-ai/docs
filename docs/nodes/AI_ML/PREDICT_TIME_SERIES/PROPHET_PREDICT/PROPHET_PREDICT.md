---
title: PROPHET_PREDICT
description: Leverage Python's power in time series forecasting with Flojoy's PROPHET_PREDICT node that creates a forecast, identifies the trend components, and plots it in Plotly.
keywords: [AI, ML, Python, Predict, Time Series, Forecast, Trend, Plotly, Dataframe, DataContainer]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT/examples/EX1/output.jpeg
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
<PythonCode GLink='AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT/PROPHET_PREDICT.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import appImgLight from './examples/EX1/app_light.jpeg'
import outputImg from './examples/EX1/output.jpeg'
import outputLight from './examples/EX1/output_light.jpeg'

### Train a Prophet model and run a prediction forecast

<AppDisplay 
    nodeLabel='PROPHET_PREDICT'
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

<AppendixSection index={0} folderPath='nodes/AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT)
