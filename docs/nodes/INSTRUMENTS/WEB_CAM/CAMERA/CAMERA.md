---
title: CAMERA
description: Capture images and videos using Python with Flojoy's CAMERA instrument. Enhance your projects with Python"-"based webcam integration.
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
<PythonCode GLink='INSTRUMENTS/WEB_CAM/CAMERA/CAMERA.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='CAMERA'
    appImg={appImg}
    outputImg={outputImg}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # (Appendix)

## Appendix

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

<AppendixSection index={0} folderPath='nodes/INSTRUMENTS/WEB_CAM/CAMERA/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/INSTRUMENTS/WEB_CAM/CAMERA/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/INSTRUMENTS/WEB_CAM/CAMERA/appendix/'>{Media}</AppendixSection>