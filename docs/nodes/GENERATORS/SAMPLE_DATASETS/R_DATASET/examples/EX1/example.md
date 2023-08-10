---
title: R_DATASET
description: In this example, the R_DATASET node takes one parameter, dataset_key and loads it from the rdatasets package. A DataFrame object, from the DataContainer class, is then passed to the TABLE node, which creates a Plotly Table visualization. 
keywords: [Python, Generate, R dataset generator, Sample datasets in R, Flojoy generator nodes, R data simulation, R dataset examples, Synthetic data generation, Data simulation using R, R data generation tools, R dataset for analysis, R data manipulation techniques]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/examples/EX1/output.jpeg
---

In this example, the `R_DATASET` node takes one parameter, `dataset_key`, which is the name of the dataset, and loads it from the [`rdatasets`](https://github.com/vincentarelbundock/Rdatasets/tree/master/csv/datasets) package. In this case, `iris` is the default value of this parameter. A `DataFrame` object, from the `DataContainer` class, is then passed to the `TABLE` node, which creates a Plotly Table visualization. Finally, the current script is terminated with the `TERMINATE` node, which is the same as its parent node.
