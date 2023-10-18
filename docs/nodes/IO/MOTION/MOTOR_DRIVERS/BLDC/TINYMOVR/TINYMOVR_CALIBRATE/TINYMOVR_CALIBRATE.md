
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
<PythonCode GLink='IO/MOTION/MOTOR_DRIVERS/BLDC/TINYMOVR/TINYMOVR_CALIBRATE/TINYMOVR_CALIBRATE.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='IO/MOTION/MOTOR_DRIVERS/BLDC/TINYMOVR/TINYMOVR_CALIBRATE'
  nodeLabel='TINYMOVR_CALIBRATE'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/IO/MOTION/MOTOR_DRIVERS/BLDC/TINYMOVR/TINYMOVR_CALIBRATE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/MOTION/MOTOR_DRIVERS/BLDC/TINYMOVR/TINYMOVR_CALIBRATE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/MOTION/MOTOR_DRIVERS/BLDC/TINYMOVR/TINYMOVR_CALIBRATE/appendix/'><Media /></AppendixSection>

