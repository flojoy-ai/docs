---
title: SLOGDET
description: Compute the sign and (natural) logarithm of the determinant of an array. If an array has a very small or very large determinant, then a call to `det` may overflow or underflow. This routine is more robust against such issues, because it computes the logarithm of the determinant rather than the determinant itself.
keywords: [numpy, linear algerbra, linalg, np.linalg, numpy.linalg, numpy.linalg.slogdet]
image: https://numpy.org/doc/stable/reference/routines.linalg.html
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
<PythonCode GLink='NUMPY/linalg/SLOGDET/SLOGDET.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='NUMPY/linalg/SLOGDET'
  nodeLabel='SLOGDET'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/NUMPY/linalg/SLOGDET/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/NUMPY/linalg/SLOGDET/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/NUMPY/linalg/SLOGDET/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/NUMPY/LINALG/SLOGDET)


