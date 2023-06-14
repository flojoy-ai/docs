In this example, the "wind" dataset from the `PLOTLY_DATASET` node is split into two parts with `EXTRACT_COLUMNS`.

The top `EXTRACT_COLUMNS` node is passed "direction" in the `columns` parameter to extract only the `direction` column, while the bottom node is passed "strength,frequency" to extract the other two. The resulting dataframes are both visualised in a `TABLE`.