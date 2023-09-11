---
title: TRIMBOTH
description: Slice off a proportion of items from both ends of an array. Slice off the passed proportion of items from both ends of the passed array (i.e., with `proportiontocut` = 0.1, slices leftmost 10% **and** rightmost 10% of scores). The trimmed values are the lowest and highest ones. Slice off less if proportion results in a non-integer slice index (i.e. conservatively slices off `proportiontocut`).
keywords: [scipy, statistics, signal processing, scipy.stats, scipy.signal, scipy.stats.trimboth]
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
<PythonCode GLink='SCIPY/stats/TRIMBOTH/TRIMBOTH.py'>{PythonSource}</PythonCode>


<SectionBreak />

    

[//]: # (Examples)

## Examples

### Trim a proportion from both ends of an array

<AppDisplay 
  GLink='SCIPY/stats/TRIMBOTH'
  nodeLabel='TRIMBOTH'>
</AppDisplay>

<SectionBreak />

    

[//]: # (Appendix)

import Notes from './appendix/notes.md';
import Hardware from './appendix/hardware.md';
import Media from './appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/SCIPY/stats/TRIMBOTH/appendix/'><Notes /></AppendixSection>
<AppendixSection index={1} folderPath='nodes/SCIPY/stats/TRIMBOTH/appendix/'><Hardware /></AppendixSection>
<AppendixSection index={2} folderPath='nodes/SCIPY/stats/TRIMBOTH/appendix/'><Media /></AppendixSection>

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/tree/main/docs/nodes/SCIPY/STATS/TRIMBOTH)

