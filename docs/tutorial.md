---
sidebar_position: 3
id: tutorial
title: Signal processing example
---

In this page, we will go through a fully functional example of a digital signal processing application. In reality, the signal and timing will come from hardware inputs to Flojoy, but for now we simply simulate a noisy digital signal. 

:::info
This complete example is given in the example directory as `FIR.txt`. It is recommended you follow along in your instance of Flojoy to develop intuition for the program.
:::

### Generating a noisy signal

To this aim, let's first create a noisy signal. We start with a `linspace` node to define a range of times defining $t\in[0,400)\text{ ms}$. We can then connect this node's output to our primary signal generator, the `SINE` node. 

For this example, we define our primary signal at frequency ~30 Hz, and we'll add 4 other sinusoidal signals at smaller amplitudes, at different frequencies, and at different phases relative to the primary signal. 

:::tip
To define each parameter of the sinusoidal functions, it's easier to use the `CTRLS` tab, where you can add Numeric Nodes to change all of the parameters in one place. 
:::

The signal we want to generate is the following:
$$
\begin{align*}
x(t) &= \overbrace{\cos(2\pi t / 2)}^\text{primary signal}\\
     &+ 0.2\sin(2\pi t \cdot 2.5 + 0.1)  \\
     &+ 0.2\sin(2\pi t\cdot 15.3) \\
     &+ 0.1\sin(2\pi t \cdot 16.7 + 0.1) \\
     &+ \underbrace{0.1\sin(2\pi t \cdot 23.45+0.8)}_\text{noise @ 4 different $f$, $A$, $\varphi$}
\end{align*}$$

Now that we have our `LINSPACE` node, we need to now create 5 different waveforms with the `SINE` node. We can specify all the frequencies, amplitudes, and phases with the `CTRLS` tab. 

![image](/img/FIR_signal_generation.png)
*A screenshot from the debug tab of Flojoy with the signal generation for the FIR example. We've connected the output of the `LINSPACE` node to the 5 `SINE` nodes to create a noisy signal*

To finalize our signal, we now need to add them together. To do this, we need 4 `ADD` nodes, and then we are ready to process!

![image](/img/FIR_total_signal.png)
*The total noisy signal viewed in the debug tab of Flojoy*


### Digital signal processing

