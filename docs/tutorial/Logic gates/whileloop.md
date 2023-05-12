---
sidebar_position: 2
id: whileloop
title: Conditions and WHILE
---

The other common version of iteration implemented in many programming languages is that of the `while` loop (sometimes called a `do` loop) that executes some code until some condition is satisfied. In Python, a basic `while` loop which checks if an accumulator reaches some max value, for example, is easy to write:

```python
accumulator = 1
while accumulator < 6:
  print(accumulator)
  accumulator += 1
else:
  print("accumulator is no longer less than 6")
```

However, instead of implementing a separate node in Flojoy for such a loop, we can simply provide a break condition for the infinite loop implemented already in the `loop` app. By setting `num_loops` to -1, we iterate the loop forever. We can now add a condition which will break the loop if some expression evaluates to True, thus implementing the `while` loop. We do this with the *conditional* node.

## The `conditional` node

The `conditional` node has two input (target) handles that serve as the left and right sides of some algebraic statement. Should the statement evaluate to True, the conditional node instructs flojoy to execute the nodes connected to the `true` source handle of the node. Otherwise, it executes the code connected to the `false` source handle.

The operation interogated by the node defaults to the 'greater than or equal to' operation. However, many different algebraic operations can be passed to the node through its `OPERATOR_TYPE` parameter, controlled in the `CTRLS` tab of the UI. The operations that can be evaluated are $\le$, $>$, $<$, $\ge$, $\neq$, and $=$.


### A complete example: breaking a loop when a condition breaks

We now make a complete example illustrating how we can break an infinite loop when some condition is no longer satisfied, aka the while loop.

Our goal is to start with a constant, in this example 12, and subtract one from it at every iteration of the loop. When the value gets below -1, we wish to break the loop.

To this aim, we start by adding the `loop`, and `GoTo` nodes to the app, and connecting them together in the `CTRLS` tab like the previous example. We now start with a constant that we connect directly to the `body` handle of the `loop` node, and another constant we also connect to the same handle. To the constant node that contains the starting value (12), we connect an instance of the `feedback` node.

Connecting the output of the feedback node, and the decrimentor constant node (-1) to an addition node, we pass the result of the addition to the `x` handle of a `conditional` node, and the decrimentor node to the `y` handle of the `conditional` node. When the expression is false, we wish to repeat the loop; else we break!

![image](/img/looping/while_conditional_app.png)
*The complete setup of the example app in the main tab of Flojoy. This example decriments 1 from 12 at each iteration of the loop. If the last result of the addition node (aka the value of the most recent subtraction) is less than -1 (the decimentor), we break the loop.*


Once you have the nodes connecting properly, we need to enter the `CTRLS` tab to connect the nodes properly. We can specify the algebraic operation the conditional node uses by adding a dropdown input, selecting `CONDITIONAL/OPERATOR_TYPE`, and choosing $\ge$. Finally, we add another dropdown node to specify that `FeedBack/REFERRED_NODE` should be the `add` node.
![image](/img/looping/while_conditional_app_ctrls.png)
*The `CTRLS` tab of Flojoy with the correct settings to implement the feedbacking of the addition node, to create the infinite loop, and to correctly specify which comparison the conditional app should execute.*
#### Voila! You've successfully created your first while loop in Flojoy.
:::info
The complete iterative subtraction in a while loop example can be downloaded [here](/apps/while_loop_conditional.txt).
:::
