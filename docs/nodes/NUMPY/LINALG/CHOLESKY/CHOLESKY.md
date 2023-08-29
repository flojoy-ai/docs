---
title: CHOLESKY
description: Cholesky decomposition. Return the Cholesky decomposition, `L * L.H`, of the square matrix `a`, where `L` is lower-triangular and .H is the conjugate transpose operator (which is the ordinary transpose if `a` is real-valued).  `a` must be Hermitian (symmetric if real-valued) and positive-definite. No checking is performed to verify whether `a` is Hermitian or not. In addition, only the lower-triangular and diagonal elements of `a` are used. Only `L` is actually returned.
keywords: [numpy, linear algerbra, linalg, np.linalg, numpy.linalg, numpy.linalg.cholesky]
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
<PythonCode GLink='NUMPY/linalg/CHOLESKY/CHOLESKY.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='NUMPY/linalg/CHOLESKY'
  nodeLabel='CHOLESKY'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/NUMPY/linalg/CHOLESKY/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/NUMPY/linalg/CHOLESKY/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/NUMPY/linalg/CHOLESKY/appendix/'><Media /></AppendixSection>


