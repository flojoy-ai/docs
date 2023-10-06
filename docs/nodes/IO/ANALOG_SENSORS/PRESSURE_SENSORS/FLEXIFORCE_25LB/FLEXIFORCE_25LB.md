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
<PythonCode GLink='IO/ANALOG_SENSORS/PRESSURE_SENSORS/FLEXIFORCE_25LB/FLEXIFORCE_25LB.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

### Convert voltages into pressures

<AppDisplay
    nodeLabel='FLEXIFORCE_25LB'
    appImg={''}
    outputImg={''}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/IO/ANALOG_SENSORS/PRESSURE_SENSORS/FLEXIFORCE_25LB/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/ANALOG_SENSORS/PRESSURE_SENSORS/FLEXIFORCE_25LB/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/ANALOG_SENSORS/PRESSURE_SENSORS/FLEXIFORCE_25LB/appendix/'><Media /></AppendixSection>

<!--Add Button here-->