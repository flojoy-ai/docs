<!--- Add SEO here --->

In this example, we use the `R_DATASET` node to generate a dataframe with the `airquality` string as the node parameter.

With the top `LINE` node we visualize the input data. Here each line of a different color represents the evolution of a column as it progresses through the rows. There are 6 lines, representing columns 0 to 5.

Then we use the `DF_2_NP` node to convert the input data from a `dataframe` type to a `numpy array` type. The output data is visualized with the bottom `LINE` node, showing a lot more lines, since each line represents the evolution of each row as it progresses through the columns. Further, the axis here ranges from 0 to 5, which corresponds with the columns 0 to 5 in the top `LINE` node. This confirms that the output data is a numpy array.