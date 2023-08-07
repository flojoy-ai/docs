<!--- Add SEO here --->

In this example, the `R_DATASET` node takes one parameter, `dataset_key`, which is the name of the dataset, and loads it from the [`rdatasets`](https://github.com/vincentarelbundock/Rdatasets/tree/master/csv/datasets) package. In this case, `iris` is the default value of this parameter. A `DataFrame` object, from the `DataContainer` class, is then passed to the `TABLE` node, which creates a Plotly Table visualization. Finally, the current script is terminated with the `TERMINATE` node, which is the same as its parent node.
