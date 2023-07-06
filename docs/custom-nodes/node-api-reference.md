---
sidebar_position: 6
id: node-api-reference
title: Flojoy Node API Reference
description: API reference for developing Flojoy nodes in Python.
---

## Decorator parameters

### `node_type`

By default, Flojoy will look at which part of the directory tree the node is located in to determine the type of the node. This is purely for styling purposes. If you would like to override this, pass the `node_type` parameter to the `flojoy` decorator.

```python
@flojoy(node_type="SIMULATIONS")
def MY_NODE(default: OrderedPair) -> OrderedPair:
    ...
```

### `deps`

If your node requires pip dependencies not installed by default with Flojoy, they can be specified in the decorator so they can be installed before running the flow chart.

```python
import torch

@flojoy(deps={'torch':'2.0.1'})
def TORCH_NODE(default: Matrix) -> Matrix:
    ...
```

### `inject_node_metadata`

Whether or not to pass `DefaultParams` to the function. See [Parameters#DefaultParams](#defaultparams)

## Inputs and outputs

Inputs will appear on nodes marked with the parameter name they were given in the Python function. If you only have 1 input and do not wish for a name to appear, the parameter should be given the name `default`.

```python
@flojoy
def SINE(default: OrderedPair) -> OrderedPair:
    ...
```

### Unions

Node inputs or outputs with multiple possible types can be indicated with a type union. Note that the Flojoy editor's type checking will allow a connection if there is any overlap at all between two types. (For example, passing `Matrix | DataFrame | Greyscale` to an input of type `Matrix | OrderedPair | OrderedTriple` is allowed).

```python
@flojoy
def UNIONS(
    foo: Matrix | DataFrame | Greyscale,     # Preferred syntax, use this
    bar: Union[Matrix, DataFrame, Greyscale] # This also works
) -> OrderedPair | OrderedTriple:
    ...
```

### Optionals

If an input is not required, mark it with the `Optional` type hint and give it a default value of `None`.

```python
@flojoy
def RAND(default: Optional[OrderedPair] = None) -> OrderedPair:
    ...
```

### `Any` type

If you want a node to be able to take any kind of `DataContainer`, simply use `DataContainer` as the type annotation. Note that it is always preferred to specify a more specific type when possible.

```python
@flojoy
def FEEDBACK(default: DataContainer) -> DataContainer:
    ...
```

### Arbitrary number of inputs

To allow a node to accept an arbitrary number of inputs, make the node type a `list` of `DataContainer`s. In this example, the `ADD` node can accept any number of inputs through input `b`.

```python
@flojoy
def ADD(a: OrderedPair, b: list[OrderedPair]) -> OrderedPair:
    ...
```

### Multiple outputs

For a node to return multiple `DataContainer`s, declare a class that inherits from `TypedDict` and make sure all of the fields are `DataContainer`s. The names given to the outputs will be displayed on the node in the Flojoy editor.

```python
from typing import TypedDict

class FooOutput(TypedDict):
    output1: OrderedPair
    output2: Matrix

@flojoy
def FOO(default: OrderedPair) -> FooOutput:
    x = default.x
    y = default.y * 2
    mat = np.array([[1,2], [3,4]])

    return FooOutput(output1=OrderedPair(x, y), output2=mat)
```

## Parameters

Parameters and their default values can be specified using regular Python syntax. It is good to specify a default value in most cases. The list of allowed parameter types are as follows:

- `int`
- `float`
- `str`,
- `bool`,
- `list[int]`,
- `list[float]`,
- `list[str]`,
- `Literal` (for Select parameters)
- `NodeReference`
- `Array` (a wrapper for `list[str | int | float]`)
- `DefaultParams` (a special type carrying metadata about a node)

```python
def MY_NODE(
    default: OrderedPair,
    n: int = 5,
    foo: str = "bar",
    colors: list[str] = ["red", "green", "blue"]
) -> OrderedPair:
    ...
```

### Select

A `Select` parameter (a dropdown list of options in the editor) can be specified using `Literal` from Python's `typing` module.

```python
def PLOTLY_DATASET(dataset_key: Literal["wind", "iris", "carshare"] = "wind"): -> DataFrame:
    ...
```

### Parameter type wrappers

These are types that carry special meaning in Flojoy but just wrap regular Python types. The inner value can be accessed by calling `.unwrap()` on the object.

`NodeReference`: A reference to another node in the flow chart

`Array`: A generic array (`list[str | int | float]`)

```python
@flojoy
def GOTO(default: DataContainer, goto_node_id: NodeReference):
    ref = goto_node_id.unwrap()
    ...
```

### `DefaultParams`

A special parameter type that contains metadata about a node. This class has the following fields:

- `node_id`: The ID of the node in the flow chart. This has the format `"{NODE_NAME}-{uuid}"`
- `job_id`: The ID of the job running this node.
- `jobset_id`: The ID of the current flow chart run. (This is different every run)
- `node_type`: The type of the node (ex: `"SIMULATIONS"`)

In order to access this information, you must add a parameter named `default_params` with a type annotation of `DefaultParams`, and pass `inject_node_metadata=True` to the `flojoy` decorator.

```python
@flojoy(inject_node_metadata=True)
def LOOP(
    default: DataContainer, default_params: DefaultParams, num_loops: int = -1
) -> LoopOutput:
    ...
```
