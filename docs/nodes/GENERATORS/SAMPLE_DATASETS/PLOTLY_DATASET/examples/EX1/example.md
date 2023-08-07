<!--- Add SEO here --->

In this example, the `PLOTLY_DATASET` node takes one parameter, `dataset_key`, which is the name of the dataset, and loads it from the Plotly sample datasets. In this case, 'wind' is the default value of this parameter. It then passes a `DataFrame` object, from the `DataContainer` class, to the `TABLE` node, which creates a Plotly Table visualization. Finally, the current script is terminated with the `TERMINATE` node, which is the same as its parent node.
