<!--- Add SEO here --->

In this example, the `PLOTLY_DATASET` node generates a `dataframe`. This output is passed to the type casting `DF_2_ORDEREDTRIPLE` node, which converts the `dataframe` type into an `ordered_triple` type from the `DataContainer` class. 

We then use the `ORDERED_TRIPLE_2_SURFACE` node to cast the `ordered_triple` to a `surface` `DataContainer` type. Finally we vizualize the output with the Plotly visualizer `SURFACE3D` node.