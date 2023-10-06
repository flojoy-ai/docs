---
title: OPEN_WEBCAM
description: In this example, the OPEN_WEBCAM opens the connection with the connected camera, then uses the `WEBCAM` node takes and returns a picture. The IMSHOW node then displays the image taken by the camera.
keyword: [Python, Instrument, Web cam, Camera, Python webcam integration, Camera instrument in Python, Capture images and videos, Streamline webcam usage, Python-based camera control, Webcam integration techniques, Python image and video capture, Enhance projects with webcam, Accurate media processing, Webcam usage with Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/INSTRUMENTS/WEB_CAM/CAMERA/examples/EX1/output.jpeg
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
<PythonCode GLink='IO/IMAGING/OPEN_WEBCAM/OPEN_WEBCAM.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';

### OPEN_WEBCAM example

<AppDisplay
    nodeLabel='OPEN_WEBCAM'
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

<AppendixSection index={0} folderPath='nodes/IO/IMAGING/OPEN_WEBCAM/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/IO/IMAGING/OPEN_WEBCAM/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/IO/IMAGING/OPEN_WEBCAM/appendix/'><Media /></AppendixSection>


