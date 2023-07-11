
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


<DocString>{DocstringSource}</DocString>
<PythonCode GLink='TRANSFORMERS/MATRIX_MANIPULATION/MATMUL/MATMUL.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='TRANSFORMERS/MATRIX_MANIPULATION/MATMUL'
  nodeLabel='MATMUL'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/MATRIX_MANIPULATION/MATMUL/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/MATRIX_MANIPULATION/MATMUL/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/MATRIX_MANIPULATION/MATMUL/appendix/'>{Media}</AppendixSection>


