---
title: PLOTLY_DATASET
description: In this example, the PLOTLY_DATASET node takes one parameter, dataset_key, which is the name of the dataset, and loads it from the Plotly sample datasets. It then passes a DataFrame object, from the DataContainer class, to the TABLE node, which creates a Plotly Table visualization.
keywords: [Python, Generate, Plotly, Plotly dataset generator, Sample datasets with Plotly, Flojoy generator nodes, Python Plotly data visualization, Plotly dataset examples, Interactive data plotting, Plotly data simulation, Python dataset generation, Plotly visualization tools, Data visualization using Plotly]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SAMPLE_DATASETS/PLOTLY_DATASET/examples/EX1/output.jpeg
---

In this example, the `PLOTLY_DATASET` node takes one parameter, `dataset_key`, which is the name of the dataset, and loads it from the Plotly sample datasets. In this case, 'wind' is the default value of this parameter. It then passes a `DataFrame` object, from the `DataContainer` class, to the `TABLE` node, which creates a Plotly Table visualization. Finally, the current script is terminated with the `TERMINATE` node, which is the same as its parent node.
