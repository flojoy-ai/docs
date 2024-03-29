---
title: ACCURACY
description: The ACCURACY node takes two dataframes with the true and predicted labels from a classification task, and indicates what proportion of the predictions were correct. These dataframes should both be single columns.
keywords: [AI, Classification, Python, DataFrame, Accuracy, Prediction]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/CLASSIFICATION/ACCURACY/examples/EX1/output.jpeg
---

[//]: # 'Custom component imports'


import DocStringJSON from '@site/src/components/DocStringJSON';
import PythonCode from '@site/src/components/PythonCode';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # 'Docstring'

import DocstringJson from '!!raw-loader!./a1-[autogen]/docstring.json';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';

<DocStringJSON data={DocstringJson} />

<PythonCode GLink='AI_ML/CLASSIFICATION/ACCURACY/ACCURACY.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # 'Examples'

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import appImgLight from './examples/EX1/app_light.jpeg'
import outputImg from './examples/EX1/output.jpeg'
import outputLight from './examples/EX1/output_light.jpeg'

### Determine whether predictions are accurate

<AppDisplay 
    nodeLabel='ACCURACY'
    appImg={appImg}
    appLight={appImgLight}
    outputLight={outputLight}
    outputImg={outputImg}
    >
{App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # 'Appendix'

## Appendix

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

<AppendixSection index={0} folderPath='nodes/AI_ML/CLASSIFICATION/ACCURACY/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/CLASSIFICATION/ACCURACY/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/CLASSIFICATION/ACCURACY/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # 'Edit page on GitHub'

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/AI_ML/CLASSIFICATION/ACCURACY)
