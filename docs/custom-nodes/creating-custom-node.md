---
sidebar_position: 4
id: creating-custom-node
title: Creating a custom node
---

## Division: an example

Suppose we wanted to contribute a node that divides two items elementwise (for the case of vector inputs, for instance). Although we could do this with the built-in `invert` and `multiply` nodes, we want to create this node for convenience.

### Creating the source files

To start, we create the file `divide.py` inside `/PYTHON/FUNCTIONS/ARITHMETIC`, and add the divide function to the `__all__` variable inside `__init__.py` of the same directory.

```diff {title='__init__.py'}
- __all__ = ["ADD", "MULTIPLY", "SUBTRACT"]
+ __all__ = ["ADD", "MULTIPLY", "SUBTRACT", "DIVIDE"]
```

We can then create our new function using the features discussed [here](../data-container).

```python {title='divide.py'}
import numpy as np
from flojoy import flojoy, DataContainer

def DIVIDE(dc, params):

    a = dc[0].y
    b = dc[1].y

    result = np.divide(a,b) #ensure elementwise
    return DataContainer(
        type='ordered_pair', 
        x={'a': a, 'b': b}, 
        y = result
    )
```

### Creating the manifest