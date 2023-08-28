---
title: BIG_NUMBER
description: In this example, the LOOP node is used to iterate over an application five times. Inside the LOOP body, we start by multiplying two CONSTANT nodes, 4 and 2. For subsequent iterations, we utilize a special node, called FEEDBACK. This node captures the result of multiplication of the two constants from the previous iteration and multiplies it with the CONSTANT node with a value of 2.
keywords: [Python, Visualize, Plotly, Plotly Big Number visualizer, Python numerical visualization, Large numerical insights, Big Number visualization examples, Flojoy Plotly nodes, Data presentation tools, Python data visualization, Numerical data representation, Visualizing data with Plotly, Impactful numerical insights]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/VISUALIZERS/PLOTLY/BIG_NUMBER/examples/EX1/output.jpeg
---

In this example, the `LOOP` node is used to iterate over an application five times.

Inside the `LOOP` body, we start by multiplying two `CONSTANT` nodes, `4` and `2`. For subsequent iterations, we utilize a special node, called `FEEDBACK`. This node captures the result of multiplication of the two constants from the previous iteration and multiplies it with the `CONSTANT` node with a value of 2.

To visualize the sum, we employ the `BIG_NUMBER` node, which generates a plotly figure and displays a large number. The figure includes a relative delta, which represents the change relative to the previous iteration.