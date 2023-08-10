---
title: DF_2_NP
description: In this example, we generate a dataframe, then we use the `DF_2_NP` node to convert the input to a numpy array type. The output data is visualized showing the evolution of a column as it progresses through the rows.
keyword: [Python, Transform, Type casting, Dataframe to NumPy conversion, Python type casting transformer, Data conversion with DF_2_NP, Python data manipulation, Streamline data processing, Data transformation techniques, NumPy array creation, Python data analysis, Accurate data insights, Data manipulation using DF_2_NP]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/TYPE_CASTING/DF_2_NP/examples/EX1/output.jpeg
---

In this example, we use the `R_DATASET` node to generate a dataframe with the `airquality` string as the node parameter.

With the top `LINE` node we visualize the input data. Here each line of a different color represents the evolution of a column as it progresses through the rows. There are 6 lines, representing columns 0 to 5.

Then we use the `DF_2_NP` node to convert the input data from a `dataframe` type to a `numpy array` type. The output data is visualized with the bottom `LINE` node, showing a lot more lines, since each line represents the evolution of each row as it progresses through the columns. Further, the axis here ranges from 0 to 5, which corresponds with the columns 0 to 5 in the top `LINE` node. This confirms that the output data is a numpy array.