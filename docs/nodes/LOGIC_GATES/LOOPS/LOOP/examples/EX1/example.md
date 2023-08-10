---
title: LOOP
description: In this example, we show a simple way to create a Python loop with Flojoy. The parameter for the LOOP node was set to 100 loops (the default is "-"1, which causes the loop to repeat indefinitely).
keyword: [Python, Flow, Logic gates, Loop, Loop logic gate, Python loop operations, Data manipulation with looping, Streamline data processing, Loop"-"driven transformations, Looping in Python, Python data analysis, Accurate data insights, Data processing using LOOP logic gate, Data manipulation using looping in Python]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/LOGIC_GATES/LOOPS/LOOP/examples/EX1/output.jpeg
---

In this example, we show a simple way to create a loop with Flojoy: 

The [`LOOP`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py) node defines the number of loops.

The [`LOOP_INDEX`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/) node then tracks the loop index (the number of loops that has occured). This index starts at 1. 

Finally, the [`BIG_NUMBER`](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/BIG_NUMBER/BIG_NUMBER.py) node, which is connected to the `end` output of the `LOOP` node, serves to terminate the program.

The parameter for the `LOOP` node was set to 100 loops (the default is -1, which causes the loop to repeat indefinitely). For the `LOOP_INDEX` node, the referred node was set to `LOOP`. When we run the app, we can see how the loop index increases to 100 as the loop continues.