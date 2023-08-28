---
title: DECIMATE
description: Downsample the signal after applying an anti-aliasing filter. By default, an order 8 Chebyshev type I filter is used. A 30 point FIR filter with Hamming window is used if `ftype` is 'fir'.
keywords: [scipy, statistics, signal processing, scipy.stats, scipy.signal, scipy.signal.decimate]
image: https://docs.scipy.org/doc/scipy/reference/signal.html
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
<PythonCode GLink='SCIPY/signal/DECIMATE/DECIMATE.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='SCIPY/signal/DECIMATE'
  nodeLabel='DECIMATE'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/SCIPY/signal/DECIMATE/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/SCIPY/signal/DECIMATE/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/SCIPY/signal/DECIMATE/appendix/'><Media /></AppendixSection>


