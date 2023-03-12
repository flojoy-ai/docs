---
sidebar_position: 2
id: custom-nodes
title: Custom Nodes
---

## The `DataContainer` class

To begin writing custom nodes, there are a few requirements that the main function called by the node must satisfy. All nodes in Flojoy must return an instance of the `DataContainer` class of `flojoy-python`. There are many types of objects that can be passed to `DataContainer`, briefly broken down here:

- `ordered_pair` : this is the default typing of the `DataContainer` class, consisting of a simple `(x,y)` pair. Here, convention is that `x` is those inputs passed to the node, and `y` is the output. If there are multiple inputs to the node, make sure to pass them as a dictionary to `DataContainer`. For example, the built-in addition node returns 

```
DataContainer(
    x = {'a': a, 'b': b},   # a dictionary of both inputs to the node
    y = numpy.add(a,b)      # add using NumPy to ensure compatibility with all iterable types
)
```

- `greyscale` / `dataframe` / `matrix` : these three types encapsulate the same fundamental object, a 2D array of data. The differentiation is made to ensure clarity during developement (for example, image processing applications should use the `greyscale` type for binary images, not `matrix` which should be reserved for linear algebra operations). A `DataContainer` object of these types can easily be instantiated by passing the `m` parameter:

```
DataContainer(
    type = 'matrix',           # specify type at instantiation
    m = my_processed_matrix,   # the matrix manipulated and returned by the function
)
```

