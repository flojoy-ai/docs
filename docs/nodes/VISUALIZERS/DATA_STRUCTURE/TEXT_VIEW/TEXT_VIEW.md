
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
<PythonCode GLink='VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/TEXT_VIEW.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW'
  nodeLabel='TEXT_VIEW'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/VISUALIZERS/DATA_STRUCTURE/TEXT_VIEW)


