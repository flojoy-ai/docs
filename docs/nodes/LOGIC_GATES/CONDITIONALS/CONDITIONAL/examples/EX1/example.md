---
title: CONDITIONAL
description: The CONDITIONAL node compares two given DataContainer inputs and enqueues nodes connected with true or false output based on the comparison result.
keyword: [Python, Flow, Logic gates, Conditional, Conditional logic gates, Python logic gates, Data analysis with conditionals, Streamline logical operations, Condition"-"based transformations, Conditional statements in Python, Python data manipulation, Accurate data insights, Logical operations using conditionals, Data processing using CONDITIONAL logic gates]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/LOGIC_GATES/CONDITIONALS/CONDITIONAL/examples/EX1/output.jpeg
---

In this example, we begin with two `CONSTANT` nodes, initialized with values 8 and 4. These nodes are connected to the X and Y inputs of the `CONDITIONAL` node, allowing us to compare them.

Based on the result of the comparison, the corresponding output gate of the `CONDITIONAL` node will be activated. In this case, we have set the `operator_type` parameter to `>`, indicating that the comparison being performed is greater than. 

As a result, the `true` output gate of the `CONDITIONAL` node will be triggered, leading to the execution of the Plotly Visual `LINE` nodes connected to it.