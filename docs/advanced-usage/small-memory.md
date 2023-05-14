---
sidebar_position: 1
id: small-memory
title: The SmallMemory class
---

There are instances where a custom node will need to store complicated data such that future iterations of the node, or perhaps another external node, will be able to access it, even if no direct connections are made in Flojoy. This might be because, while in a loop, a node may be able to make smart decisions about what its future output may be given the history of another node, for example a measurement made in real time.

To this aim, we have implemented the `SmallMemory` class in `flojoy-python`. It is a helper API that is geared to allowing developers to store custom data in Redis such that it can be easily accessed later in the execution of the app. The most common robust datatype that requires storage is usually `NumPy` arrays. However, the `SmallMemory` class is capable of the reading and writing of many data types from Redis.

To use the `SmallMemory` class, we simply import it in the header of our custom node via:

```python
from node_sdk.small_memory import SmallMemory
```
:::info

Flojoy automatically garbage collects all data that is stored at the end of a job, so the user need only concern themselves with the reading and writing of the data (how very Python!)
:::

### Writing data to memory

The API needs a few parameters to be able to store data internally.
- `node_id`: the node ID is required at runtime to be able to identify a specific pointer to memory as being associated with this particular instance of a given node (to avoid confusion if multiple instances of the same node type are in the app).

- `memory_key`: the memory key is a string passed to Redis to be able to recognize the type of node that accessed this data. The convention we have adopted is that the memory key is the name of the function in the node (as defined in the Python file). This allows for easy parsing in other nodes during development.

- `data`: this is, understandably, the data to be stored. There are multiple datatypes that can be stored with the `SmallMemory` class.

    - `NumPy` arrays
    - `pandas` dataframes
    - strings
    - dictionaries

In Flojoy, we can easily retrieve the node ID via

```python
node_id = params.get('node_id', 0)
```
and the memory key for that given function is usually defined in the header of the Python file for that node. To then write data to memory, we simply instantiate the API and call the appropriate method:

```python
SmallMemory().write_to_memory(node_id, memory_key, data)
```

### Reading data from memory

In a very likewise fashion, we can read data in from redis with the following syntax:

```python
data = SmallMemory().read_memory(node_id, memory_key)
```

If no data has been written to this store with the given ID and key, then this method will return an empty dictionary `{}` (for example, at the first iteration of the node).

:::info
Empty dictionaries evaluate to `False` in Python, so you can easily check if `SmallMemory` returned anything real. 
:::