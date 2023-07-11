
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
<PythonCode GLink='SCIPY/stats/SIGMACLIP/SIGMACLIP.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='SCIPY/stats/SIGMACLIP'
  nodeLabel='SIGMACLIP'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/SCIPY/stats/SIGMACLIP/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/SCIPY/stats/SIGMACLIP/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/SCIPY/stats/SIGMACLIP/appendix/'>{Media}</AppendixSection>


