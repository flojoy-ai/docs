---
sidebar_position: 2
id: forloop
title: The for loop
---

One of the most common versions of iteration is the `for` loop. This is the schema specifying that we do some operation for each object in some iterable. Python users will recognize the implementation of `for` loops with the familiar syntax `for <item> in <collection>`. The `for` loop is included in Flojoy with the combination of the `LOOP` and `GOTO` nodes.

 <p float="left" style={{textAlign: 'center', justifyItems: 'center'}}>
  <img src="/img/looping/loop_node.png" width="309.75" />
  <img src="/img/looping/goto_node.png" width="400" /> 
  <p>The <code>loop</code> node and the <code>goto</code> nodes as rendered in the Flojoy UI.</p>
</p>

The `loop` node depends primary on one parameter: `num_loops`. This is, rather intuitively, the number of iterations that the loop will persist for. It can be changed easily using the `CTRLS` tab of the UI.
:::caution
This node simply instructs Flojoy that a loop should be iterating. The node does not itself have any functionality related to the data of the nodes. Any data access/manipulation will have to happen with another node.
:::
:::info
The number of iterations that the loop performs should be set to positive integers. However, users can also specify a value of -1, which indicates a infinite loop that will ignore any exit conditions.
:::

In order to create a loop, populate an instance of the `loop` node (found in `Conditionals, Timers, & Loops / LOOP`) in the UI. The node has two source handles on the right of the rendered box that can be passed to other nodes: (i) the *body* handle, and the (ii) the *end* handle. These indicate to Flojoy which nodes should be executed while the loop is iterating (the body handle), and then which nodes should begin to be executed at the end of the loop (the end handle). 

From here, you can go to the `CTRLS` tab in the UI, and add a new numeric input. You can then select the `num_loops` parameter of the `loop` node you've just made to specify how many times you wish to iterate.

To terminate the interior loop, indicating to Flojoy the final node the loop needs to execute before repeating, populate an instance of the `GoTo` node, found in the same directory as the `loop` node. Go back to the `CTRLS` panel of the UI, adding a dropdown input box. From here, you can now assign the `GOTO_NODE_ID` of the `GoTo` node to the `loop` node you've just created. This now indicates to Flojoy which nodes to repeat while the loop is still valid.

Finally, we need to tell Flojoy to finish the program once we complete the loop. We do this by adding a `TERMINATOR` node to the end handle of the `loop` node to signal to Flojoy that we are done!

### Iterative subtraction: an example

To illustrate a simple example of looping in Flojoy, we can add some basic functionality inside the loop we've just created. We can create two new `constant` nodes, as well as an `addition` node. Connecting the constants to the output of the `body` handle of the `loop` node, and the output of the `constants` to the `add` node, we can easily create a program that substracts 1 from 12, for example, at each iteration of the node. Finally we complete the loop by connecting the result of the addition node to our `GoTo` node.

![image](/img/looping/loop_subtraction.png)
*The complete iterative subtraction example in the main tab of the Flojoy UI.*
![image](/img/looping/loop_controls_subtraction.png)
*The complete iterative subtraction example in the `CTRLS` tab of Flojoy, showing how to properly connect the `GoTo` node to the `loop` node, as well as illustrating how we can easily change the number of loop iterations, as well as change the amount we subtract at each iteration.*

:::info
The complete iterative subtraction example can be downloaded [here](/apps/loop_example.txt).
:::
