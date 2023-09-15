---
sidebar_position: 1
id: small-memory
title: SmallMemory
---

# The SmallMemory class

There are instances where a custom node will need to store complicated data so that future iterations of the node, or perhaps another external node, will be able to access it, even if no direct connections are made in Flojoy. This might be because, while in a loop, a node may be able to make smart decisions about what its future output may be, given the history of another node, for example a measurement made in real time.

To this aim, we have implemented the [`SmallMemory`](https://github.com/flojoy-io/studio/blob/main/PYTHON/node_sdk/small_memory.py) class in `flojoy-python`. It is a helper API that is geared to allowing developers to store custom data in Redis so that it can be easily accessed later in the execution of the app. The most common robust data type that requires storage, is usually `NumPy` arrays. However, the `SmallMemory` class is capable of the reading and writing of many data types from Redis.

To use the `SmallMemory` class, we simply import it in the header of our custom node via:

```python
from node_sdk.small_memory import SmallMemory
```
:::info

Flojoy automatically garbage collects all data that is stored at the end of a job, so the user need only to concern themselves with the reading and writing of the data (how very Python!).
:::

### Writing data to memory

The API needs a few parameters to be able to store data internally:

- `node_id`: The node ID is required at runtime to be able to identify a specific pointer to memory as being associated with this particular instance of a given node. This helps to avoid confusion if there are multiple instances of the same node type in the app.

- `memory_key`: The memory key is a string passed to Redis to be able to recognize the type of node that accessed this data. The convention we have adopted is that the memory key is the name of the function in the node (as defined in the Python file). This allows for easy parsing in other nodes during development.

- `data`: This is, understandably, the data to be stored. There are multiple data types that can be stored with the `SmallMemory` class, including:

    - `NumPy` arrays
    - `pandas` dataframes
    - strings
    - dictionaries

In Flojoy, we can access the node ID by passing `inject_node_metadata=True` to the `flojoy` decorator and adding a parameter with a `DefaultParams` class type annotation, as shown below:

```python
from flojoy import flojoy, DefaultParams

@flojoy(inject_node_metadata=True)
def Node(..., default_params: DefaultParams):
    ...
```

Then we can easily access the node ID as follows:

```python
node_id = default_params.node_id
```

More information about `DefaultParams` is available [here](../custom-nodes/node-api-reference.md#defaultparams).

The memory key for a given function is usually defined in the header of the Python file of that node. To write data to memory, we simply instantiate the API and call the appropriate method:

```python
SmallMemory().write_to_memory(node_id, memory_key, data)
```

### Reading data from memory

In a similar fashion, we can read data in from Redis with the following syntax:

```python
data = SmallMemory().read_memory(node_id, memory_key)
```

If no data has been written to this store with the given node ID and memory key, this method will return an empty dictionary `{}` (for example, at the first iteration of the node).

:::info
Empty dictionaries evaluate to `False` in Python, so you can easily check if `SmallMemory` returned anything real. 
:::

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/advanced-usage/small-memory.md)