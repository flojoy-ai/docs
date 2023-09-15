---
sidebar_position: 2
id: data-container
title: DataContainer
description: Flojoy's DataContainer type is the fundamental object used to pass data between nodes.
---

Flojoy's DataContainer type is the fundamental object used to pass data between nodes.

To write a custom node for your Flojoy Studio app there are a few requirements that the node's main Python function must satisfy. The most important requirement however is that any Flojoy node must receive and return data in the `DataContainer` format.

# Available `DataContainer` types

All nodes in Flojoy must return an instance of an object that inherits from the `DataContainer` class of [`flojoy-python`](https://github.com/flojoy-ai/python/blob/main/flojoy/data_container.py) (or for nodes with multiple outputs a `TypedDict` with `DataContainer` fields).

`DataContainer`s are extremely versatile and have many types to accomodate any type of data or serialized object that you may want to process in your Flojoy apps. 

Available `DataContainer` types include:

| DataContainer type | DataContainer keys        | Node usage example                                                                                   | Node Python code |
| ------------------ | ------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------- |
| DataFrame          | m (for "matrix")          | [`BART_LARGE_CNN`](https://docs.flojoy.ai/nodes/AI_ML/TEXT_SUMMARIZATION/BART_LARGE_CNN/)            | [GitHub](https://tinyurl.com/2apvt2md) |
| Grayscale          | m                         | [`REGION_PROPERTIES`](https://docs.flojoy.ai/nodes/TRANSFORMERS/IMAGE_PROCESSING/REGION_PROPERTIES/) | [GitHub](https://tinyurl.com/32ap6ze8) |
| Image              | r, g, b, a ("red", etc)   | [`IMAGE_SMOOTHING`](https://docs.flojoy.ai/nodes/TRANSFORMERS/IMAGE_PROCESSING/IMAGE_SMOOTHING/)     | [GitHub](https://tinyurl.com/23pdf7c2) |
| Matrix             | r, g, b                   | [`MATMUL`](https://docs.flojoy.ai/nodes/TRANSFORMERS/MATRIX_MANIPULATION/DOT_PRODUCT/)               | [GitHub](https://tinyurl.com/ye4th56j) |
| OrderedPair        | x, y                      | [`FFT`](https://docs.flojoy.ai/nodes/TRANSFORMERS/SIGNAL_PROCESSING/FFT/)                            | [GitHub](https://tinyurl.com/y8bwz75d) |
| OrderedTriple      | x, y, z                   | [`SCATTER3D`](https://docs.flojoy.ai/nodes/VISUALIZERS/PLOTLY/SCATTER3D/)                            | [GitHub](https://tinyurl.com/yw2bwdam) |
| Plotly             | fig (for Plotly "figure") | [`SCATTER3D`](https://docs.flojoy.ai/nodes/VISUALIZERS/PLOTLY/SCATTER3D/)                            | [GitHub](https://tinyurl.com/yw2bwdam) |
| TextBlob           | text_blob                 | [`TEXT`](https://docs.flojoy.ai/nodes/GENERATORS/SIMULATIONS/TEXT/)                                  | [GitHub](https://tinyurl.com/27cet69f) |
| Scalar             | c (for "constant")        | [`SCALAR`](https://docs.flojoy.ai/nodes/GENERATORS/SIMULATIONS/SCALAR/)                              | [GitHub](https://tinyurl.com/35wn2n6j) |
| Surface            | x, y, z                   | [`SURFACE`](https://docs.flojoy.ai/nodes/VISUALIZERS/PLOTLY/SURFACE3D/)                              | [GitHub](https://tinyurl.com/25vkyzkr) |
| Vector             | v (for "vector")          | [`COUNT_VECTORIZER`](http://localhost:3000/nodes/AI_ML/NLP/COUNT_VECTORIZER/)                        | [GitHub](https://tinyurl.com/49vy83cf) |

## DataContainer type descriptions

- `OrderedPair`: This is a simple `(xy)` pair. Here the convention is that `x` represents the inputs passed to the node and `y` represents the output. For example the built-in [`ADD`](/nodes/TRANSFORMERS/ARITHMETIC/ADD) node returns:

- `OrderedTriple`: This is an intuitive extension of the `OrderedPair` type allowing for the retention of a third result `z` where `x` and `y` are the inputs passed to the node and `z` is the output. **Note:** Currently there are only few nodes that have incorporated this type.

- `Grayscale` / `Matrix`: These two types encapsulate the same fundamental object a 2D array of data. The differentiation is made to ensure clarity during developement. For example image processing applications should use the `Greyscale` type for binary images while `Matrix` should be reserved for linear algebra operations. A `DataContainer` object of these types can easily be instantiated by passing the `m` parameter:

- `Image`: This data type is reserved for well images! These images must be full color (for greyscale images rather use the `Greyscale` type above). This means that this type requires four arguments `(rgba)` which represents the red blue green and alpha of the pixels in the image. Each of these arguments is a 2D array and can be passed to the `Image` class at instantiation just like in the above examples.

- `Scalar`: The data type reserved for [scalar](https://en.wikipedia.org/wiki/Scalar_processor#Scalar_data_type) items. By scalar we mean only that the object can be entirely described by a single value $c$. While in principle the object passed as the `c` attribute can be anything please reserve the use of this type for a truly scalar object.

- `Parametric[TYPE]`: This data type consists of an additional argument `t` which represents time. It can be irregularly spaced but must always be in ascending order otherwise an error will occur.

- `DataContainer` : this is the base class for all `DataContainer` types. It can be used to represent any of the above data types. It is recommended to always use the most specific type possible but this type can be used in cases where any type of `DataContainer` is a valid input.

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/custom-nodes/data-container.md)
