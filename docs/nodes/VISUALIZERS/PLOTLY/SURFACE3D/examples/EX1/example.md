---
title: SURFACE3D
description: The SURFACE3D node creates a Plotly 3D Surface visualization for different types of DataContainer objects.
keywords: [Python, Visualize, Plotly, 3D, Plotly Surface3D visualizer, Python 3D surface plot tool, Three-dimensional data visualization, Surface3D plot examples, Flojoy Plotly nodes, Interactive 3D surface charts, Python data visualization, 3D surface plot creation, Visualizing data with Plotly, Three-dimensional data analysis]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/SURFACE3D/examples/EX1/output.jpeg
---

In this example, we have used the following nodes to visualize different types of `DataContainer` objects with the `SURFACE3D` node:

- `PLOTLY_DATASET`: This node returns a `DataFrame`.

- `DF_2_ORDEREDTRIPLE`: This is a casting type node that converts a `DataFrame` to an `OrderedTriple` type of `DataContainer` class.

- `ORDERED_TRIPLE_2_SURFACE`: This node converts an `OrderedTriple` to a `Surface` type of `DataContainer` class.

- `Matrix`: This node returns a Matrix type `DataContainer` object.