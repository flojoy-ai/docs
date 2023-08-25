---
title: TRIM_MEAN
description: Return mean of array after trimming distribution from both tails. If `proportiontocut` = 0.1, slices off 'leftmost' and 'rightmost' 10% of scores. The input is sorted before slicing. Slices off less if proportion results in a non-integer slice index (i.e., conservatively slices off `proportiontocut` ).
keywords: [scipy, statistics, signal processing, scipy.stats, scipy.signal, scipy.stats.trim_mean]
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
<PythonCode GLink='SCIPY/stats/TRIM_MEAN/TRIM_MEAN.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='SCIPY/stats/TRIM_MEAN'
  nodeLabel='TRIM_MEAN'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/SCIPY/stats/TRIM_MEAN/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/SCIPY/stats/TRIM_MEAN/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/SCIPY/stats/TRIM_MEAN/appendix/'>{Media}</AppendixSection>


