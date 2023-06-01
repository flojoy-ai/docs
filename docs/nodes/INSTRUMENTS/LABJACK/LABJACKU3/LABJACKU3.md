
[//]: # (Custom component imports)

import DocString from '@site/src/components/DocString';
import PythonCode from '@site/src/components/PythonCode';
import Parameters from '@site/src/components/Parameters';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # (TODO: Machine-generate this section)

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';
import ParametersSource from '!!raw-loader!./a1-[autogen]/parameters.yaml';

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='INSTRUMENTS/LABJACK/LABJACKU3/LABJACKU3.py'>{PythonSource}</PythonCode>
<Parameters>{ParametersSource}</Parameters>

<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='INSTRUMENTS/LABJACK/LABJACKU3'
  nodeLabel='LABJACKU3'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/INSTRUMENTS/LABJACK/LABJACKU3/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/INSTRUMENTS/LABJACK/LABJACKU3/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/INSTRUMENTS/LABJACK/LABJACKU3/appendix/'>{Media}</AppendixSection>


