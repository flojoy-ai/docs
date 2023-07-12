
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

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='LOADERS/INTERNAL_MEMORY/DS_LOAD/DS_LOAD.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='LOADERS/INTERNAL_MEMORY/DS_LOAD'
  nodeLabel='DS_LOAD'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/LOADERS/INTERNAL_MEMORY/DS_LOAD/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOADERS/INTERNAL_MEMORY/DS_LOAD/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOADERS/INTERNAL_MEMORY/DS_LOAD/appendix/'>{Media}</AppendixSection>


