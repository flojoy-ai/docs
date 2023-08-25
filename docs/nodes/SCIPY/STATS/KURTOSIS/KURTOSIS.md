---
title: KURTOSIS
description: Compute the kurtosis (Fisher or Pearson) of a dataset. Kurtosis is the fourth central moment divided by the square of the variance. If Fisher's definition is used, then 3.0 is subtracted from the result to give 0.0 for a normal distribution.  If bias is False then the kurtosis is calculated using k statistics to eliminate bias coming from biased moment estimators  Use `kurtosistest` to see if result is close enough to normal.
keywords: [scipy, statistics, signal processing, scipy.stats, scipy.signal, scipy.stats.kurtosis]
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
<PythonCode GLink='SCIPY/stats/KURTOSIS/KURTOSIS.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

<AppDisplay 
  GLink='SCIPY/stats/KURTOSIS'
  nodeLabel='KURTOSIS'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/SCIPY/stats/KURTOSIS/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/SCIPY/stats/KURTOSIS/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/SCIPY/stats/KURTOSIS/appendix/'>{Media}</AppendixSection>


