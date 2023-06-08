[//]: # 'Custom component imports'

import DocString from '@site/src/components/DocString';
import PythonCode from '@site/src/components/PythonCode';
import Parameters from '@site/src/components/Parameters';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # 'TODO: Machine-generate this section'

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';
import ParametersSource from '!!raw-loader!./a1-[autogen]/parameters.yaml';

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='AI_ML/CLASSIFICATION/SUPPORT_VECTOR_MACHINE/SUPPORT_VECTOR_MACHINE.py'>{PythonSource}</PythonCode>
<Parameters>{ParametersSource}</Parameters>

<SectionBreak />

[//]: # 'Examples'

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import Data1 from '!!raw-loader!./examples/EX1/output.txt';

<AppDisplay 
    data={Data1}
    nodeLabel='SUPPORT_VECTOR_MACHINE'>
{App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # 'Appendix'

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/AI_ML/CLASSIFICATION/SUPPORT_VECTOR_MACHINE/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/CLASSIFICATION/SUPPORT_VECTOR_MACHINE/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/CLASSIFICATION/SUPPORT_VECTOR_MACHINE/appendix/'>{Media}</AppendixSection>
