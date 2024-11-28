
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
<PythonCode GLink='IO/PROTOCOLS/SCPI/SCPI_WRITE/SCPI_WRITE.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='IO/PROTOCOLS/SCPI/SCPI_WRITE'
  nodeLabel='SCPI_WRITE'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/IO/PROTOCOLS/SCPI/SCPI_WRITE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/PROTOCOLS/SCPI/SCPI_WRITE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/PROTOCOLS/SCPI/SCPI_WRITE/appendix/'><Media /></AppendixSection>


