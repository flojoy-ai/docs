
[//]: # (Custom component imports)

import DocString from '@site/src/components/DocString';
import PythonCode from '@site/src/components/PythonCode';
import Parameters from '@site/src/components/Parameters';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # (Docstring)

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';
import ParametersSource from '!!raw-loader!./a1-[autogen]/parameters.yaml';

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='bin/flojoy-io/docs/docs/LOADERS/CLOUD_DATABASE/LOADER/LOADER.py'>{PythonSource}</PythonCode>
<Parameters>{ParametersSource}</Parameters>

<SectionBreak />

    

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import Data1 from '!!raw-loader!./examples/EX1/output.txt';

<AppDisplay 
    data={Data1}
    nodeLabel='LOADER'>
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />
  
    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/nodes/bin/flojoy-io/docs/docs/nodes/nodes/LOADERS/CLOUD_DATABASE/LOADER/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/nodes/bin/flojoy-io/docs/docs/nodes/nodes/LOADERS/CLOUD_DATABASE/LOADER/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/nodes/bin/flojoy-io/docs/docs/nodes/nodes/LOADERS/CLOUD_DATABASE/LOADER/appendix/'>{Media}</AppendixSection>


