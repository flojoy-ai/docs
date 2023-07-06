---
sidebar_position: 3
id: creating-custom-node
title: Creating a custom node
description: Learn how to create a custom node in Flojoy by writing a Python function.
---

## Division: an example

Suppose we wanted to contribute a node that divides two items element-wise (for the case of vector inputs, for instance). Although we could do this with the built-in `invert` and `multiply` nodes, we want to create this node for convenience.

### Creating the source files

To start, we create the file `DIVIDE/DIVIDE.py` inside [`/PYTHON/nodes/TRANSFORMERS/ARITHMETIC/`](https://github.com/flojoy-io/nodes/tree/main/TRANSFORMERS/ARITHMETIC). Each node must have its own folder.

We can then create our new function using the features discussed [here](../data-container).

```python {title='DIVIDE.py'}
import numpy as np
from flojoy import flojoy, OrderedPair

@flojoy
def DIVIDE(a: OrderedPair, b: OrderedPair) -> OrderedPair:
    result = np.divide(a.y, b.y)

    return OrderedPair(
        x = a.x,
        y = result
    )
```

`OrderedPair` is a class that inherits from `DataContainer`. Function parameters that have a type annotation that is a `DataContainer` are interpreted as **node inputs**, meaning they are passed in by connecting nodes together. Here, the `DIVIDE` node takes in two `OrderedPair`s, `a` and `b`, and returns a new `OrderedPair`.

:::caution
Unlike normal Python functions, type annotations for Flojoy nodes are **required** for the node to function properly.
:::

For more information, see the [API Reference](../node-api-reference).

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
This is now performed at startup of Flojoy. So simply rerunning the startup script is sufficient.
:::

To update the databases with the functionalities of the nodes (including your new custom node), run following commands in the root directory:

```bash
python3 generate_manifest.py # generates nodes manifest for Front-end
```

```bash
python3 write_python_metadata.py # writes nodes metatdata to Front-end
```

### Almost done! Housekeeping time

Let's make sure your code is properly formatted!

We use [black](https://github.com/psf/black) as our formatter for Python, which you can install by running

```bash
pip3 install black
```

or

```bash
pip3 install -r requirements.txt
```

on the root of the nodes repo.

Once the formatter is installed, simply run

```bash
black .
```

on the root of the nodes repo and all your Python files will be properly formatted!

:::tip
It is always a good idea to setup format on save on the editor of your choice!
:::

### Congratulations! You've created your first custom node.

When creating custom nodes, make sure to go through the following steps:

- [x] Did I make my new function correctly?
  - [x] Did I add the `flojoy` decorator to my function?
  - [x] Did I add inputs and parameters for the node correctly with proper type annotations?
- [x] Did I generate the manifest for the node?
- [x] Did I update the Python metadata?

### Common Errors:

- `[2023-05-17 08:59:25.876-RQ-watch] cmd = node["cmd"]    KeyError: 'cmd'`

This likely means you have to run `python3 generate_manifest.py` in the root Flojoy directory.
