
[//]: # (Custom component imports)

import DocString from '@site/src/components/DocString';
import DocStringJSON from '@site/src/components/DocStringJSON';

import PythonCode from '@site/src/components/PythonCode';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # (Docstring)

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import DocstringJson from '!!raw-loader!./a1-[autogen]/docstring.json';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';

<DocString>{DocstringSource}</DocString>
<DocStringJSON data={DocstringJson} />
<PythonCode GLink='LOGIC_GATES/LOOPS/APPEND/APPEND.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='LOGIC_GATES/LOOPS/APPEND'
  nodeLabel='APPEND'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/LOGIC_GATES/LOOPS/APPEND/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOGIC_GATES/LOOPS/APPEND/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOGIC_GATES/LOOPS/APPEND/appendix/'><Media /></AppendixSection>


