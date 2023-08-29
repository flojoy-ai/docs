---
title: FLOJOY_CLOUD_UPLOAD
description: Efficiently upload a DataContainer to the measurement node on the FloJoy Cloud. The DataContainer can later be retrieved with the Flojoy Cloud Download node.
keyword: [Python, Load, Dataset loading in Python, Cloud database loader, Data loading from cloud, Flojoy Cloud Database Loader, Cloud data import, Python data retrieval, Cloud data processing, Efficient data loading, Streamline cloud data access, Cloud data integration, Data loading for analysis]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/LOADERS/CLOUD_DATABASE/FLOJOY_CLOUD_UPLOAD/examples/EX1/output.jpeg
--- 

[//]: # 'Custom component imports'

import DocString from '@site/src/components/DocString';
import PythonCode from '@site/src/components/PythonCode';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # 'Docstring'

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='LOADERS/CLOUD_DATABASE/FLOJOY_CLOUD_UPLOAD/FLOJOY_CLOUD_UPLOAD.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # 'Examples'

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

<AppDisplay
nodeLabel='FLOJOY_CLOUD_UPLOAD'
appImg={''}
outputImg={''} >
{App1}
</AppDisplay>

<Example1 />

<SectionBreak />
  


[//]: # 'Appendix'

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/LOADERS/CLOUD_DATABASE/FLOJOY_CLOUD_UPLOAD/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOADERS/CLOUD_DATABASE/FLOJOY_CLOUD_UPLOAD/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOADERS/CLOUD_DATABASE/FLOJOY_CLOUD_UPLOAD/appendix/'><Media /></AppendixSection>
