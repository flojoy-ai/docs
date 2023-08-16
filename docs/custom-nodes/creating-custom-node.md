---
sidebar_position: 3
id: creating-custom-node
title: Creating a custom node
description: Learn how to create a custom node in Flojoy by writing a Python function.
---

## A basic example

Suppose we wanted to contribute a node that divides two items element-wise (for the case of vector inputs, for instance). Although we could do this with the built-in `invert` and `multiply` nodes, we could also do it from scratch.

### Creating the source files

To start, we create a `DIVIDE` folder inside [`/PYTHON/nodes/TRANSFORMERS/ARITHMETIC/`](https://github.com/flojoy-io/nodes/tree/main/TRANSFORMERS/ARITHMETIC), and then create the `DIVIDE.py` file inside that folder. Each node must have its own folder.

We can then create our new function using the features discussed [here](../data-container).

```python {title='DIVIDE.py'}
import numpy as np
from flojoy import flojoy, OrderedPair

@flojoy(node_type="ARITHMETIC")
def DIVIDE(a: OrderedPair, b: OrderedPair) -> OrderedPair:
    x = a.x
    result = np.divide(a.y,b.y)
    return OrderedPair(x=x, y=result)
```

Note: The type hints are important! This is how Flojoy differentiates between node inputs (that you connect edges to) and parameters (that you can set in the node parameters panel). Anything that inherits from `DataContainer` (e.g. `OrderedPair`, `Matrix`, etc.) is an input, and everything else is a parameter.

The `node_type` argument to the `flojoy` decorator specifies what kind of node this should be displayed as in the frontend.

## A more advanced example

Let's say we want to create a node to wrap the `train_test_split` function from `scikit-learn`. This node will have to return two different `DataContainers`.

```python {title="TRAIN_TEST_SPLIT.py"}

import pandas as pd
from typing import cast
from dataclasses import dataclass
from flojoy import flojoy, DataFrame
from sklearn.model_selection import train_test_split


@dataclass(frozen=True)
class TrainTestSplitOutput:
    train: DataFrame
    test: DataFrame


@flojoy(deps={"scikit-learn": "1.2.2"})
def TRAIN_TEST_SPLIT(
    default: DataFrame, test_size: float = 0.2
) -> TrainTestSplitOutput:
    df = default.m

    train, test = cast(list[pd.DataFrame], train_test_split(df, test_size))
    return TrainTestSplitOutput(train=DataFrame(df=train), test=DataFrame(df=test))
```

In this example, the node needs to import `sklearn` which might not be installed. We can specify this in the `deps` argument to the `flojoy` decorator. This will ensure that the library is installed before the node is run.

This node needs to return two `DataContainers`. We do this by creating a dataclass with the names of the outputs as fields. Then, we return an instance of this dataclass.

Looking at the parameters, we have one `DataContainer` input, called `default`. When we only have one input and we do not want to label it in the frontend, we can name it `default`, which is a special name that Flojoy recognizes. This node also has a `test_size` parameter that has a default value of 0.2.

### Creating custom components (Frontend)

In Flojoy, you can create custom components for newly created nodes (i.e. shape and node connections). The custom components are located in the [`/src/feature/flow_chart_panel/components/`](https://github.com/flojoy-ai/studio/tree/main/src/feature/flow_chart_panel/components) `studio` folder. 

Create a custom component for the newly created nodes and register the design in [`/src/configs/NodeConfigs.ts`](https://github.com/flojoy-io/studio/blob/main/src/configs/NodeConfigs.ts) file. In this case, it is an `ARITHMETIC` type node, so you will register the custom component as `ARITHMETIC: YOUR_CUSTOM_COMPONENT`. If you do not register the newly created node type, it will render the `DefaultNode` component.

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

To update the databases with the functionalities of the nodes (including your new custom node), run the following commands in the root directory:

```bash
python3 generate_manifest.py  # generates node manifest for Frontend
```

```bash
python3 write_python_metadata.py  # writes node metatdata to Frontend
```

### Almost done! Housekeeping time

Let's make sure your code is properly formatted!

We use [black](https://github.com/psf/black) as our formatter for Python, which you can install by running the following in the **root** of the `nodes` repository:

```bash
pip3 install black
```

or

```bash
pip3 install -r requirements.txt
```

Once the formatter is installed, simply run:

```bash
black .
```

All your Python files will now be properly formatted!

:::tip
It is always a good idea to set up formatting on save in the editor of your choice!
:::

### Congratulations! You have created your first custom node.

When creating custom nodes, make sure to go through the following checklist:

- [x] Did I create my new function correctly?
  - [x] Did I add the `flojoy` decorator to my function?
  - [x] Did I add `inputs` and `parameters` for the node correctly with proper type annotations?
- [x] Did I generate the manifest for the node?
- [x] Did I update the Python metadata?

### Common Errors:

`[2023-05-17 08:59:25.876-RQ-watch] cmd = node["cmd"]    KeyError: 'cmd'`

This likely means you have to run `python3 generate_manifest.py` in the root Flojoy directory.

## Contributing to the Nodes submodule

Currently there are only one submodule in the Flojoy `studio` repository, called the `nodes` submodule, that includes all the node definitions.

To contribute your own custom node, do the following:

- First go to the [`PYTHON/nodes/`](https://github.com/flojoy-io/nodes/tree/main/) directory, then create **your own branch**. 
- After creating your own custom nodes, push it to GitHub and create a pull request to the main branch. We have a [Pull Request Template](https://github.com/flojoy-io/nodes/blob/main/pull_request_template.md) for the nodes repository that must be followed by the developer.
- Next, navigate back to the `studio` root directory, then also push it to remote. The `studio` repository has a separate pull request strategy. 
  - The pull request should be made to the **develop branch**, and later the develop branch is merged with main. Therefore, when you create **your own branch** in the `studio` repository, it must be created from the develop branch. 
  - Further, the link to the `nodes` submodule pull request (from earlier) must be included in this pull request to the `studio` repository.

This will ensure that the `nodes` submodule will be tracked in the `studio` repository by the latest commit hash and that the pull requests are in sync.