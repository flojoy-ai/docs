---
title: CONSTANT
description: Easily create constant value simulations using Python and Flojoy's CONSTANT generator node. It generates a single x-y vector of numeric (floating point) constants.
keywords: [Python, Simulations, Value Generator, Python-based simulations, Python constant value generator, Constant simulations in Python,
Python simulation tools, Constant value modeling, Python simulation examples, Simulation documentation, Constant value generation, Python simulation techniques,
Constant value modeling]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SIMULATIONS/CONSTANT/examples/EX1/output.jpeg
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
<PythonCode GLink='GENERATORS/SIMULATIONS/CONSTANT/CONSTANT.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';



<AppDisplay 
    nodeLabel='CONSTANT'
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

<AppendixSection index={0} folderPath='nodes/GENERATORS/SIMULATIONS/CONSTANT/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/GENERATORS/SIMULATIONS/CONSTANT/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/GENERATORS/SIMULATIONS/CONSTANT/appendix/'>{Media}</AppendixSection>


