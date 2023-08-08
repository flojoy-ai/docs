<!--- Add SEO here --->

In this example, we use the `MATRIX` node to generate a matrix with 9 rows and 3 columns as the parameters.

In the top `LINE` node, the 9 colored lines each represents one of the rows of the matrix and their corresponding values within each column.

The `MAT_2_DF` node is used to convert the input array from a `matrix` type to a `dataframe` type, and the output is then visualized with the bottom `LINE` node. In this graph, we only see 3 lines of different colors since these lines show the evolution of the 3 columns as it progresses through the rows (which is as expected from a `dataframe` data type).