---
sidebar_position: 2
id: data-container
title: Data Container
---

To begin writing custom nodes, there are a few requirements that the main function called by the node must satisfy. All nodes in Flojoy must return an instance of the `DataContainer` class of `flojoy-python`. There are many types of objects that can be passed to `DataContainer`, briefly broken down here:

- `ordered_pair` : this is the default typing of the `DataContainer` class, consisting of a simple `(x,y)` pair. Here, convention is that `x` is those inputs passed to the node, and `y` is the output. If there are multiple inputs to the node, make sure to pass them as a dictionary to `DataContainer`. For example, the built-in addition node returns 

```
DataContainer(
    x = {'a': a, 'b': b},   # a dictionary of both inputs to the node
    y = numpy.add(a,b)      # add using NumPy to ensure compatibility with all iterable types
)
```

- `ordered_triple` : this is an intuitive extension of the `ordered_pair` type, allowing for the retention of a third result, `z`.
NOTE that as of now, there are few nodes that have incorporated this type.

- `greyscale` / `dataframe` / `matrix` : these three types encapsulate the same fundamental object, a 2D array of data. The differentiation is made to ensure clarity during developement (for example, image processing applications should use the `greyscale` type for binary images, not `matrix` which should be reserved for linear algebra operations). A `DataContainer` object of these types can easily be instantiated by passing the `m` parameter:

```
DataContainer(
    type = 'matrix',           # specify type at instantiation
    m = my_processed_matrix,   # the matrix manipulated and returned by the function
)
```

- `image` : this data type is reserved for, well, images! These images must be full color (for greyscale images, please use the `greyscale` type above). This means that this type requires four (4) arguments, `(r,g,b,a)` representing the red, blue, green, and alpha of the pixels in the image. These can be passed to the `DataContainer` class at instantiation just like the above examples.

- `scalar` : the data type reserved for [scalar](https://en.wikipedia.org/wiki/Scalar_processor#Scalar_data_type) items. By scalar, we mean only that the object can be entirely described by a single value $c$. While in principle the object passed as the `c` attribute can be anything, please reserve the usage of this type for a truly scalar object.

- `file` : this data type is to pass the file name to the next node. It requires both a `file_type` attribute, and the `y` attribute, which passes the file handle to the next node.