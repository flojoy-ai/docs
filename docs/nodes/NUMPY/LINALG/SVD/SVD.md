---
title: SVD
description: Singular Value Decomposition. When `a` is a 2D array, and ``full_matrices=False``, then it is factorized as ``u @ np.diag(s) @ vh = (u * s) @ vh``, where `u` and the Hermitian transpose of `vh` are 2D arrays with orthonormal columns and `s` is a 1D array of `a`'s singular values. When `a` is higher-dimensional, SVD is applied in stacked mode as explained below.
keywords: [numpy, linear algerbra, linalg, np.linalg, numpy.linalg, numpy.linalg.svd]
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
<PythonCode GLink='NUMPY/linalg/SVD/SVD.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='NUMPY/linalg/SVD'
  nodeLabel='SVD'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/NUMPY/linalg/SVD/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/NUMPY/linalg/SVD/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/NUMPY/linalg/SVD/appendix/'><Media /></AppendixSection>


