---
sidebar_position: 1
id: numpyscipy
title: NumPy+SciPy Nodes
---

# NumPy and SciPy Nodes

NumPy and SciPy (NUMerical PYthon and SCIentific PYthon) are among the most downloaded Python packages. They each have multiple functions that can prove to be useful to Flojoy users. To this end, many NumPy and SciPy functions have been autogenerated in node format for use in Flojoy. Currently the functions are limited to NumPy's linear algebra (numpy.linalg) and SciPy's signal and stats (scipy.signal, scipy.stats) functions.

For more informortion, see [NumPy](https://numpy.org/) and [SciPy](https://scipy.org/).

:::caution
Many of these nodes are experimental. If you need help with a specific node, please contact us. 
:::

## Example

The below example uses the SciPy function, [`Savgol Filter`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.savgol_filter.html), which can be used to smooth nodes. To show this, a noisy sine plot is generated. The `Savgol Filter` is then applied to approximate the original sine function.

![image](/img/numpy/savgol.png)
*A script that generates a sine wave, adds noise, and then smooths that noise.*

<details><summary>For Developers</summary>
<p>

These nodes are autogenerated using [module_scraper.py](https://github.com/flojoy-io/python/blob/main/flojoy/module_scraper.py) in the Flojoy Python library. The script should be ran directly in the nodes directory. 

Functions can have various issues that prevent it from being autogenerated. For example, some parameter/argument types can not be valid in Flojoy:

```
FORBIDDEN_TYPES = [
"tuple",
"array-like",
"array_like",
"function",
"callable",
"sequence",
"... array_like",
"number or ndarray or sequence",
"complex"
]
```

Numpy arguements can also be specified in non-standard ways, such as ```non-zero int``` (or when multiple types are specified as above), which Flojoy cannot currently handle. It may be possible to include these functions automatically or with slight manual changes to the autogenerated script.

Currently these nodes only handle OrderedPair data. However, it is likely that some nodes may require Matrix data types.

</p>
</details> 

<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/nodes/numpyscipy.md)