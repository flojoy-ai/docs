<!--- Add SEO here --->

In this example, the `LOOP` node is used to iterate over an application five times.

Inside the `LOOP` body, we start by multiplying two `CONSTANT` nodes, `4` and `2`. For subsequent iterations, we utilize a special node, called `FEEDBACK`. This node captures the result of multiplication of the two constants from the previous iteration and multiplies it with the `CONSTANT` node with a value of 2.

To visualize the sum, we employ the `BIG_NUMBER` node, which generates a plotly figure and displays a large number. The figure includes a relative delta, which represents the change relative to the previous iteration.