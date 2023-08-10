---
title: DIFFERENTIATE
description: In this example, the LINSPACE node creates a linear function, which generates two lists that are required inputs for the DIFFERENTIATE node.It then computes the derivative of the array, y with respect to x. This output is visualized as a constant line.
keyword: [Python, Transform, Calculus, Differentiate, Differentiation transformer, Calculus operations in Python, Data differentiation with Flojoy, Python differentiation calculations, Streamline data analysis, Calculus transformations, Differential calculus, Python data manipulation, Accurate data insights, Differentiation in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/CALCULUS/DIFFERENTIATE/examples/EX1/output.jpeg
---

In this example, the `LINSPACE` node creates a linear function, which generates two lists that are required inputs for the `DIFFERENTIATE` node.

The `DIFFERENTIATE` node then computes the derivative of the array, y with respect to x. This output is visualized as a constant line, as expected, with the `LINE` node.

The other `LINE` node, which takes the `LINSPACE` node outpout as an input, visualizes a diagonal line that represents the original function.
