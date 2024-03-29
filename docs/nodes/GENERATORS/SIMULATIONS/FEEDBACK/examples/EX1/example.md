---
title: FEEDBACK
description: Inside the `LOOP` body, we start by multiplying two `CONSTANT` nodes, 4 and 2, together. For subsequent iterations, we utilize the FEEDBACK node. This node captures the result of multiplication of the two constants from the previous iteration and multiplies it with a CONSTANT node with a value of 2. To visualize the sum, we employ the BIG_NUMBER node, which generates a plotly figure displaying a large number.
keywords: [Python, Simulations, Python feedback simulations, Feedback loop, Feedback systems in Python, Flojoy generator nodes, Python simulation tools, Feedback modeling examples, Dynamic feedback simulations, Python simulation, Feedback loop generation, Python simulation techniques, Dynamic system modeling in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SIMULATIONS/FEEDBACK/examples/EX1/output.jpeg
---

In this example, the `LOOP` node is used to iterate over an application five times.

Inside the `LOOP` body, we start by multiplying two `CONSTANT` nodes, `4` and `2`. For subsequent iterations, we utilize a special node, called `FEEDBACK`. This node captures the result of multiplication of the two constants from the previous iteration and multiplies it with the `CONSTANT` node with a value of 2.

To visualize the sum, we employ the `BIG_NUMBER` node, which generates a plotly figure and displays a large number. The figure includes a relative delta, which represents the change relative to the previous iteration.