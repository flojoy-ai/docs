This example shows a simple way to create a loop with Flojoy.
First, you'll need to place these three nodes which are the basics of a loop:

- The [`LOOP`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py) node which will define the number of loops.

- The [`GOTO`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/GOTO/GOTO.py) node will define where the loop ends. This node takes a parameter called 'referred_node' in which you can choose where the loop starts again (Generally, it's the `LOOP` node).

- The [`END`](https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/TERMINATORS/END.py) node which is connected to the “end” output of the `LOOP` node, which serve, to terminate the program.

After that, we can place nodes to generate and visualize data within the loop:

The first x axis value (0) is generated by [`LINSPACE`](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/LINSPACE/LINSPACE.py) which is input into LOOP. [`SECOND ORDER SYSTEM`](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/SECOND_ORDER_SYSTEM/SECOND_ORDER_SYSTEM.py) creates the data for this app and stores the data in the backend system. [`FEEDBACK`](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/FEEDBACK/FEEDBACK.py) loads the data created by `SECOND ORDER SYSTEM` every loop.

:::note
The thoery behind a second order system is further explained [`here`](https://docs.flojoy.io/advanced-usage/feedback-control/model-systems/).
:::

Finally, [`REDIS LOAD`](https://github.com/flojoy-io/nodes/blob/main/LOADERS/REDIS_SYSTEM/REDIS_LOAD/REDIS_LOAD.py) loads the full dataset from the backend system. [`LINE`](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/LINE/LINE.py) will plot the results before `END` terminates the script.

