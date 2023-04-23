---
sidebar_position: 1
id: pid
title: The PID Controller
---

Now that we can model real-life systems, we need a way in which we can actively control them. Control theory is a large knowledge base in and of itself, and so we will not go into too much detail about it other than to say the most frequently used controller in industry is the *PID* controller. This is an acronym describing the way in which the controller makes its decisions based on the given input signal:

- P(roportion) : this is the linear gain contribution to the input signal to determine the output
- I(ntegral) : weighted by a contant, this is the intergal contribution of the input signal history to the output
- D(erivative) : weighted by a third constant, this is the contribution of the first order time derivative of the input signal history to the output.

These three modes of control provide a powerful toolbox to drive potentially very complicated devices.

![image](/img/active_feedback/PID.png)
*This is the typical schematic of the PID controller, where the input signal is weighted in its intensity, integral, and derivative by coefficients $K_p$, $K_I$, and $K_D$ respectively before being summed and passed to the control system.*

This would seem to indicate that the following will be true for the controller output $u$ for a given sampling time $T$:

$$
u_n = K_p e_n + TK_I\sum_n e_n + \frac{K_D}{T}(e_n-e_{n-1})
$$

In reality, we can make improvements to this by using the trapezoidal approximation for the integral for discrete values, as well as a simple FIR filter (taking the 3 previous values of $e$ to calculate the derivative) to arrive at a better functional form:

$$
u_n = K_pe_n + \frac{TK_I}{2}(e_n-e_{n-1}) + \frac{K_D}{6T}\left(e_n-e_{n-3}+3(e_{n-1}-e_{n-2})\right)
$$

This is the final form of PID control established in the `PID` node of Flojoy. In this node, we assume the time constants of the system are in units of milliseconds, and that the sampling time $T=$ 1 ms. 

:::info
Since control theory is a large field, interested readers are encouraged to read more information [here](https://en.wikipedia.org/wiki/PID_controller) to understand more the theory, motivation, and applications of the active feedback procedure using PID controllers.
:::

We will put these pieces together to create a complete simulation of active feedback control next.