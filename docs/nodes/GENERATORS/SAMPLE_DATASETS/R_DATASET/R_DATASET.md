---
title: R_DATASET
description: The R_DATASET node retrieves a pandas DataFrame from  R datasets using the provided dataset_key parameter and returns it wrapped in a DataContainer.
keywords: [Python, Generate, R dataset generator, Sample datasets in R, Flojoy generator nodes, R data simulation, R dataset examples, Synthetic data generation, Data simulation using R, R data generation tools, R dataset for analysis, R data manipulation techniques]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/examples/EX1/output.jpeg
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
<PythonCode GLink='GENERATORS/SAMPLE_DATASETS/R_DATASET/R_DATASET.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='R_DATASET'
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

<AppendixSection index={0} folderPath='nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/appendix/'>{Media}</AppendixSection>