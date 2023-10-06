---
title: STEPPER_DRIVER_TIC_KNOB
description:  In this example, the STEPPER_DRIVER_TIC_KNOB node controls a stepper motor movement with a TIC driver. It allows you to control the motor's rotation with a KNOB button. From 0 to 100 corresponds to a rotation between 0 and 360 degrees.
keyword: [Python, Instrument, Stepper motor control with knob, Python integration with stepper driver, Motion control and automation, Python"-"based stepper motor control, Stepper motor driver integration, Accurate motor movement with Python, Enhance motion control with knob, Streamline motor automation, Precise motor control using Python, Python control of stepper driver TIC with knob]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/examples/EX1/output.jpeg
---

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
<PythonCode GLink='IO/MOTION/MOTOR_DRIVER/STEPPER/POLULU/TIC_KNOB/TIC_KNOB.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

### Control a stepper motor's rotation

<AppDisplay
    nodeLabel='TIC_KNOB'
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

<AppendixSection index={0} folderPath='nodes/IO/MOTION/MOTOR_DRIVER/STEPPER/POLULU/TIC_KNOB/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/MOTION/MOTOR_DRIVER/STEPPER/POLULU/TIC_KNOB/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/MOTION/MOTOR_DRIVER/STEPPER/POLULU/TIC_KNOB/appendix/'><Media /></AppendixSection>

<!--Add Button here-->