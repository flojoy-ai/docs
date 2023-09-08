---
title: SIGMACLIP
description: Perform iterative sigma-clipping of array elements. Starting from the full sample, all elements outside the critical range are removed, i.e. all elements of the input array `c` that satisfy either of the following conditions      c < mean(c) - std(c)*low     c > mean(c) + std(c)*high  The iteration continues with the updated sample until no elements are outside the (updated) range.
keywords: [scipy, statistics, signal processing, scipy.stats, scipy.signal, scipy.stats.sigmaclip]
image: https://docs.scipy.org/doc/scipy/reference/stats.html
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
<PythonCode GLink='SCIPY/stats/SIGMACLIP/SIGMACLIP.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

### Perform iterative sigma-clipping of array elements

<AppDisplay 
  GLink='SCIPY/stats/SIGMACLIP'
  nodeLabel='SIGMACLIP'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/SCIPY/stats/SIGMACLIP/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/SCIPY/stats/SIGMACLIP/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/SCIPY/stats/SIGMACLIP/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/SCIPY/STATS/SIGMACLIP)
