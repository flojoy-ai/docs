---
sidebar_position: 4
id: creating-custom-node
title: Creating a custom node
---

## Division: an example

Suppose we wanted to contribute a node that divides two items elementwise (for the case of vector inputs, for instance). Although we could do this with the built-in `invert` and `multiply` nodes, we want to create this node for convenience.

### Creating the source files

To start, we create the file `DIVIDE/divide.py` inside [`/PYTHON/nodes/TRANSFORMERS/ARITHMETIC/`](https://github.com/flojoy-io/nodes/tree/main/TRANSFORMERS/ARITHMETIC). Each node must have its own folder. 

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

To register our new node with Flojoy, let's make a new manifest file in [`PYTHON/nodes/MANIFEST`](https://github.com/flojoy-io/nodes/tree/main/MANIFEST).

```yaml {title='divide.manifest.yaml'}
COMMAND:
  - { name: 'Div', key: 'DIVIDE', type: 'ARITHMETIC' }
```

### Creating Custom Component ( Frontend )

In Flojoy, you can create custom component for newly created nodes (i.e. shape and node connections). The custom components are located in [`/src/feature/flow_chart_panel/components/custom-nodes`](https://github.com/flojoy-io/studio/tree/main/src/feature/flow_chart_panel/components/custom-nodes) folder. Create a custom component for the newly created nodes and register the design in [`/src/configs/NodeConfigs.ts`](https://github.com/flojoy-io/studio/blob/main/src/configs/NodeConfigs.ts) file. In this case, its a `ARITHMETIC` type node, so you register custom component as `ARITHMETIC: YOUR_CUSTOM_COMPONENT`.
If you don't register the newly created node type,it will render the `DefaultNode` component.

```typescript {title='NodeConfigs.ts'}
import MyCustomComponent from '@src/feature/flow_chart_panel/components/custom-nodes/YOUR_CUSTOM_COMPONENT';

export const nodeConfigs = {
	default: DefaultNode,
	ARITHMETIC: MyCustomComponent,
};
```

### Registering the new function with Flojoy

:::info
This is now performed at startup of Flojoy.
:::

To update the databases with the functionalities of the nodes (including your new custom node), run the following in the root directory:

```bash
python3 write_python_metadata.py
```

#### Congratulations! You've created your first custom node.

When creating custom nodes, make sure to go through the following steps:

- [x] Did I make my new function correctly?
  - [x] Did I add the `flojoy` decorator to my function?
  - [x] Did I pass two arguments to my function, the `DataContainer` inputs and the parameters `params` from the manifest?
- [x] Did I create a manifest file, correctly adding the correct category key?
- [x] Did I generate the manifest for the node?
- [x] Did I update the Python metadata?

#### Common Errors:

 - ```[2023-05-17 08:29:33.105-RQ-watch] AttributeError: module 'nodes.GENERATORS.SIMULATIONS.TESTING.TESTING' has no attribute 'TESTING'```

This likely means your function name does not match the Key in your manifest.yaml file.

 - ```[2023-05-17 08:59:25.876-RQ-watch] cmd = node["cmd"]    KeyError: 'cmd'```

This likely means you have to run ```python3 generate_manifest.py``` in the root Flojoy directory. 

