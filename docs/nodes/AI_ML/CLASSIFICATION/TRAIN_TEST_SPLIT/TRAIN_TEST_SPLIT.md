---
title: TRAIN_TEST_SPLIT
description: The TRAIN_TEST_SPLIT node is used to split data into test and training data in Python, according to a specified size, before any Machine Learning tasks occur.
keywords: [AI, Classification, Python, DataFrame, Train, Training, Test, Machine Learning, ML Model]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/CLASSIFICATION/TRAIN_TEST_SPLIT/examples/EX1/output.jpeg
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
<PythonCode GLink='AI_ML/CLASSIFICATION/TRAIN_TEST_SPLIT/TRAIN_TEST_SPLIT.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='TRAIN_TEST_SPLIT'
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

<AppendixSection index={0} folderPath='nodes/AI_ML/CLASSIFICATION/TRAIN_TEST_SPLIT/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/CLASSIFICATION/TRAIN_TEST_SPLIT/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/CLASSIFICATION/TRAIN_TEST_SPLIT/appendix/'><Media /></AppendixSection>