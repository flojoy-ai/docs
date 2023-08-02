---
title: COUNT_VECTORIZER
description: Optimise NLP tasks with Python using FloJoy's COUNT_VECTORIZER. It efficiently analyses text (matrix, vector or dataframe) and returns a matrix with unique token counts for each sentence.
keywords: [AI, Python, DataFrame, NLP, Text, Tokens, Matrix, Vector]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/NLP/COUNT_VECTORIZER/examples/EX1/output.jpeg
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
<PythonCode GLink='AI_ML/NLP/COUNT_VECTORIZER/COUNT_VECTORIZER.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='COUNT_VECTORIZER'
    appImg={appImg}
    outputImg={outputImg}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />
  
    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/AI_ML/NLP/COUNT_VECTORIZER/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/NLP/COUNT_VECTORIZER/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/NLP/COUNT_VECTORIZER/appendix/'>{Media}</AppendixSection>


