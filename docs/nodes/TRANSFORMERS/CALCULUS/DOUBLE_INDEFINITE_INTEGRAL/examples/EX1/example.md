---
title: DOUBLE_INDEFINITE_INTEGRAL
description: The DOUBLE_INDEFINITE_INTEGRAL node will reshape the 3 columns in matrices and use them to output a matrix of the same dimension as the 3 reshaped matrices. In this matrix, the volume is computed up to that given point within each cell.
keyword: [Python, Transform, Calculus, Indefinite integral, Double indefinite integral transformer, Calculus operations in Python, Data integration with Flojoy, Python integration calculations, 
Calculus transformations, Double integral calculation, Python data manipulation, Accurate data insights, Indefinite integration in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/CALCULUS/DOUBLE_INDEFINITE_INTEGRAL/examples/EX1/output.jpeg
---

In this example, we use the `R_DATASET`, `DF_2_ORDEREDTRIPLE`, and `DOUBLE_INDEFINITE_INTEGRAL` nodes. The parameters for each of them are as follow:

 The `R_DATASET` node: `DNase`
 
 The `DF_2_ORDEREDTRIPLE` node: x=1, y=0, z=2
 
 The `DOUBLE_INDEFINITE_INTEGRAL` node: width=16, height=11

The random dataset, `DNase`, is a good set to use in this example since its columns (as an `OrderedTriple`) have a length of 176, which is 16 times 11. We can also see in the table of this `OrderedTriple` that we have the same 16 x values used on each of the 11 different y values. A width of 16 and height of 11 can thus be used to reshape the matrices.

The `DOUBLE_INDEFINITE_INTEGRAL` node will reshape the 3 columns in matrices and use them to output a matrix of the same dimension as the 3 reshaped matrices. In this matrix, the volume is computed up to that given point within each cell.

We can observe this with the `SURFACE3D` node where the volume indeed increases as the x and y values increase. This is expected since x, y, and z also increased in the initial table of values. The same can be observed in the `MATRIX_VIEW` node.