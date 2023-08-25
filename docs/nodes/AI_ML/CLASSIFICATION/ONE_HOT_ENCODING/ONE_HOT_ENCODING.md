---
title: ONE_HOT_ENCODING
description: Discover the power of Python in AI/ML classification with the ONE_HOT_ENCODING node that creates encoding from a dataframe and columns dataframe that contain categorical features.
keywords: [AI, Classification, Python, DataFrame, Columns Dataframe, Categorical Features, Encoding]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/CLASSIFICATION/ONE_HOT_ENCODING/examples/EX1/output.jpeg
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
<PythonCode GLink='AI_ML/CLASSIFICATION/ONE_HOT_ENCODING/ONE_HOT_ENCODING.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='ONE_HOT_ENCODING'
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
import Media from './appendix/media.md';

<AppendixSection index={0} folderPath='nodes/AI_ML/CLASSIFICATION/ONE_HOT_ENCODING/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/CLASSIFICATION/ONE_HOT_ENCODING/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/CLASSIFICATION/ONE_HOT_ENCODING/appendix/'><Media/></AppendixSection>