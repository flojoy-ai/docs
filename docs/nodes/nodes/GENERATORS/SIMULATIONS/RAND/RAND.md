
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
<PythonCode GLink='bin/flojoy-io/docs/docs/GENERATORS/SIMULATIONS/RAND/RAND.py'>{PythonSource}</PythonCode>
<Parameters>{ParametersSource}</Parameters>

<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='bin/flojoy-io/docs/docs/GENERATORS/SIMULATIONS/RAND'
  nodeLabel='RAND'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/nodes/bin/flojoy-io/docs/docs/nodes/nodes/GENERATORS/SIMULATIONS/RAND/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/nodes/bin/flojoy-io/docs/docs/nodes/nodes/GENERATORS/SIMULATIONS/RAND/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/nodes/bin/flojoy-io/docs/docs/nodes/nodes/GENERATORS/SIMULATIONS/RAND/appendix/'>{Media}</AppendixSection>


