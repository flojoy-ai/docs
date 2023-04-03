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

@flojoy
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

To register our new node with Flojoy, let's make a new manifest file in `/PYTHON/FUNCTIONS/MANIFEST/`.

```yaml {title='divide.manifest.yaml'}
COMMAND:
  - { name: 'Div', key: 'DIVIDE', type: 'ARITHMETIC' }
```

### Creating Custom Component ( Frontend )

In Flojoy, you can create custom component for newly created nodes. The Custom Components are located in `/src/feature/custom-nodes` folder. Create a custom component for the newly created nodes and register the design in `/src/configs/NodeConfigs.ts` file. In this case, its a `ARITHMETIC` type node, so you register custom component as `ARITHMETIC: YOUR_CUSTOM_COMPONENT`.
If you don't register the newly created node type,it will render the `DefaultNode` component.

### Registering the new function with Flojoy

To update the databases with the functionalities of the nodes (including your new custom node), run the following in the root directory:

```bash
python3 write_python_metadata.py
```

#### Congratulations! You've created your first custom node.

When creating custom nodes, make sure to go through the following steps:

- [x] Did I add my new function to the `__init__.py` of the category in `/PYTHON/FUNCTIONS/`?
- [x] Did I make my new function correctly?
  - [x] Did I add the `flojoy` decorator to my function?
  - [x] Did I pass two arguments to my function, the `DataContainer` inputs and the parameters `params` from the manifest?
- [x] Did I create a manifest file, correctly adding the correct category key?
- [x] Did I update the Python metadata?
