---
title: TABLE
description: We convert the DataFrame into an OrderedTriple object of the DataContainer class. The resulting object contains three arrays (x, y, and z). Finally, we visualize the data from these three nodes using Plotly Table visualization for each of the input nodes.
keywords: [Python, Visualize, Plotly, Plotly Table visualizer, Python data table tool, Dynamic table creation, Table visualization examples, Flojoy Plotly nodes, Interactive data tables, Python data representation, Table creation with Plotly, Visualizing data with tables, Data table analysis]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/TABLE/examples/EX1/output.jpeg
---

In this example, we start by using the `LINSPACE` node to generate a `Vector` object of the `DataContainer` class.

Next, we employ the `PLOTLY_DATASET` node to create a `DataFrame` object of the `DataContainer` class.

To convert the `DataFrame` into an `OrderedTriple` object of the `DataContainer` class, we utilize the `DF_2_ORDEREDTRIPLE` node. The resulting `OrderedTriple` object contains three arrays: x, y, and z.

Finally, we visualize the data from these three nodes using the `TABLE` node, which generates a Plotly Table visualization for each of the input nodes.