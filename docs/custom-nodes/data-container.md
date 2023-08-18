---
sidebar_position: 2
id: data-container
title: DataContainers
description: Flojoy's DataContainer type is the fundamental object used to pass data between nodes.
---

To begin writing custom nodes, there are a few requirements that the main function, which is called by the node, must satisfy. 

All nodes in Flojoy must return an instance of an object that inherits from the `DataContainer` class of `flojoy-python`, or a `TypedDict` with `DataContainer` fields for multiple outputs. There are many types of `DataContainer`s, briefly broken down as:

- `OrderedPair`: This is a simple `(x,y)` pair. Here, the convention is that `x` represents the inputs passed to the node, and `y` represents the output. For example, the built-in `ADDITION` node returns:

```python
OrderedPair(
    x = x
    y = numpy.add(a,b) # add using NumPy to ensure compatibility with all iterable types
)
```

- `OrderedTriple`: This is an intuitive extension of the `OrderedPair` type, allowing for the retention of a third result, `z` where `x` and `y` are the inputs passed to the node, and `z` is the output. **Note:** Currently there are few nodes that have incorporated this type.

- `Greyscale` / `Matrix`: These two types encapsulate the same fundamental object, a 2D array of data. The differentiation is made to ensure clarity during developement. For example, image processing applications should use the `Greyscale` type for binary images, while `Matrix` should be reserved for linear algebra operations. A `DataContainer` object of these types can easily be instantiated by passing the `m` parameter:

```python
Matrix(m=my_processed_matrix)
Greyscale(m=my_greyscale_image)
```

- `Image`: This data type is reserved for, well, images! These images must be full color (for greyscale images, rather use the `Greyscale` type above). This means that this type requires four arguments, `(r,g,b,a)`, which represents the red, blue, green, and alpha of the pixels in the image. Each of these arguments is a 2D array and can be passed to the `Image` class at instantiation, just like in the above examples.

- `Scalar`: The data type reserved for [scalar](https://en.wikipedia.org/wiki/Scalar_processor#Scalar_data_type) items. By scalar, we mean only that the object can be entirely described by a single value $c$. While in principle the object passed as the `c` attribute can be anything, please reserve the use of this type for a truly scalar object.

- `Parametric[TYPE]`: This data type consists of an additional argument, `t`, which represents time. It can be irregularly spaced but must always be in ascending order, otherwise an error will occur.

- `DataContainer`: This is the base class for all `DataContainer` types. It can be used to represent any of the above data types. It is recommended to always use the most specific type possible, but this type can be used in cases where any type of `DataContainer` is a valid input.
