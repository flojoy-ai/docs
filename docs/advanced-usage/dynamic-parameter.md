---
sidebar-position: 2
id: dynamic-parameters
title: Dynamic parameters
---

# Dynamic Parameters

## Conditionally hide node parameters

In some cases, there are parameters inputs that are not used or unneeded. A great example could be the `RAND` node, where different distrubution requires different parameters.

The unneeded parameters can be hidden by specifying them and the conditions which they appear in the node source code through the @display decorator.

## Using Flojoy's `display` Decorator
Flojoy's `display` decorator allows you to specify the conditions when the parameters would be displayed. 
Please note that the function name always have to be `OVERLOAD` regardless of node name and the output is always `None`.
The last function parameter and their default value in the would indicate what condition the other parameters would be displayed.
Note that ONLY the parameters indicated within the `OVERLOAD` function with a `@display` decorator will be displayed.

### Example

Consider the following example: 
```python
import random
import numpy as np
from flojoy import flojoy, OrderedPair, Scalar, Vector
from flojoy import flojoy, OrderedPair, Scalar, Vector, display
from typing import Literal, Optional


@flojoy
def RAND(
    default: Optional[OrderedPair | Vector] = None,
    distribution: Literal["normal", "uniform", "poisson"] = "normal",
    lower_bound: float = 0,
    upper_bound: float = 1,
    normal_mean: float = 0,
    normal_standard_deviation: float = 1,
    poisson_events: float = 1,
) -> OrderedPair | Scalar:
  ...
  Return Scalar(c=y)

@display
def OVERLOAD(lower_bound, upper_bound, distribution="uniform") -> None:
    return None


@display
def OVERLOAD(normal_mean, normal_standard_deviation, distribution="normal") -> None:
    return None


@display
def OVERLOAD(poisson_events, distribution="poisson") -> None:
    return None
```
In this example, `lower_bound` and `upper_bound` would be the ONLY displayed parameters in the UI when the `distribution` field is equal to "uniform", 
`normal_mean` and `normal_standard_deviation` would be the ONLY displayed parameters in the UI when `distribution` is "normal", and so forth.

Note that currently, Flojoy does not support two or more parameter conditions, but is planned in a future release.

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/advanced-usage/dynamic-parameter.md)
