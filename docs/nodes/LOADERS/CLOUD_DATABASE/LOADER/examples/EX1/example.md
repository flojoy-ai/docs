---
title: LOADER
description: This node imports a credentials file and measurement_uuid and sends input measurements to a Frontier API on every run. It will throw an error if any of these two keys are not found.
keyword: [Python, Load, Dataset loading in Python, Cloud database loader, Data loading from cloud, Flojoy Cloud Database Loader, Cloud data import, Python data retrieval, Cloud data processing, Efficient data loading, Streamline cloud data access, Cloud data integration, Data loading for analysis]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/LOADERS/CLOUD_DATABASE/LOADER/examples/EX1/output.jpeg
---  

In this example, we show the workflow of the LOADER node.

`43`[CONSTANT](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/CONSTANT/CONSTANT.py) is a `CONSTANT` node with a value of 43. It passes a DataContainer class of an ordered pair (x, y pair) to the next `LOOP` node, where x is None and y is a NumPy array with a value of 43.

The [LOOP](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py) node is a special type that iterates through all the nodes connected to the body output a specified number of times, as defined by its parameter `num_loop` (in this case it is set to 2). It passes the value of the previous `CONSTANT` node to the next nodes.

`12`[CONSTANT](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/CONSTANT/CONSTANT.py) is another `CONSTANT` node with a value of 12. It passes the value of the previous node's output in the 'x' key and its own output in the 'y' key, e.g: `{'x': <output of previous node>, 'y': [12,12,....]}`.

`-1`[CONSTANT](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/CONSTANT/CONSTANT.py) is a `CONSTANT` node with a negative value of `-1`, performing the same function as the other CONSTANT nodes.

The [FEEDBACK](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/FEEDBACK/FEEDBACK.py) node is another special node that fetches the output of the given node ID in it's parameter, `referred_node`. In this case, it is the `ADD` node `"ADD-0758c6a8-52b4-4b5b-9c46-2a83bdef2a04"`. On first iteration it passes the output of previous nodes and eventually the output of the `ADD` node's output. 

The [ADD](https://github.com/flojoy-io/nodes/blob/main/TRANSFORMERS/ARITHMETIC/ADD/ADD.py) node adds the value of connected inputs, in this case `CONSTANT` `-1` and the output of the `FEEDBACK` node.

The [LOADER](https://github.com/flojoy-io/nodes/blob/main/LOADERS/CLOUD_DATABASE/LOADER/LOADER.py) node imports `FRONTIER_API_KEY` from the `~/.flojoy/credentials` file and takes a parameter called `measurement_uuid`, which is the user measurement UUID of Frontier account. Using the `FRONTIER_API_KEY` and `measurement_uuid` send input measurements to the Frontier API on every run. This will throw an error if any of these two keys are not found.

The [GOTO](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/GOTO/GOTO.py) node refers to the `LOOP` node to check if the specified number of iteration is completed.

The [TERMINATE](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/TERMINATORS/END/END.py) node terminates the current running script. The output of this node is the same as its parent node.
