
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
<PythonCode GLink='INSTRUMENTS/LABJACK/LABJACKU3/LABJACKU3.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';



<AppDisplay 
    nodeLabel='LABJACKU3'
    appImg={''}
    outputImg={''}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />
  
    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/INSTRUMENTS/LABJACK/LABJACKU3/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/INSTRUMENTS/LABJACK/LABJACKU3/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/INSTRUMENTS/LABJACK/LABJACKU3/appendix/'>{Media}</AppendixSection>


