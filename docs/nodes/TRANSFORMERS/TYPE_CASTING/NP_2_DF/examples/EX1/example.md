---
title: NP_2_DF
description: In this example, we generate a numpy array. We can also observe in the visualization for the same data. 
keyword: [Python, Transform, Type casting, NumPy array to DataFrame conversion, Python type casting transformer, Data conversion with NP_2_DF, Python data manipulation, Streamline data processing, Data transformation techniques, DataFrame creation from NumPy array, Python data analysis, Accurate data insights, Data manipulation using NP_2_DF]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/TYPE_CASTING/NP_2_DF/examples/EX1/output.jpeg
---

In this example, we use the `BASIC_OSCILLATOR` node to generate a numpy array. The parameters of the node are set as follows:

sample_rate: 100

time: 10

waveform: sine

amplitude: 1

frequency: 1

offset: 0

phase: 0

With the top `TABLE` node, we can see that the x values represent the time when the value was taken, and that y represents the values themselves. The top `LINE` node visualizes the data from time 0 to 10.

The `NP_2_DF` node then converts the input data from a `numpy array` type to a `dataframe` type. In the bottom `TABLE` node we can see that we now have only 1 column. This is expected since, with a `dataframe` data type, only the values are used because the time is represented by the number of the row at which the value is read in the column. 

We can also observe this in the bottom `LINE` node, which visualizes the same data. However, instead of being from time 0 to 10 (as in the top `LINE` node), here it is from 0 to 1000. This is because we have a `sample_rate` of 100, meaning that for a single time measure, there are 100 values. Similarly then for 10 times, we have 1000 rows for the y columns.
