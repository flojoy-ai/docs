<!--Add SEO here-->

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
<PythonCode GLink='LOADERS/REMOTE_FILE_SYSTEM/REMOTE_FILE/REMOTE_FILE.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

### Load and convert a remote file to a DataContainer

<AppDisplay
    nodeLabel='REMOTE_FILE'
    appImg={''}
    outputImg={''}
    >
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/LOADERS/REMOTE_FILE_SYSTEM/REMOTE_FILE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/LOADERS/REMOTE_FILE_SYSTEM/REMOTE_FILE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/LOADERS/REMOTE_FILE_SYSTEM/REMOTE_FILE/appendix/'><Media /></AppendixSection>

<!--Add Button here-->