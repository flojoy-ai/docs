---
sidebar_position: 1
id: model-systems
title: Modelling Real-Life Systems
---

### A first order system

In order to understand how we might simulate a realistic system to control with our active feedback controller, we first must understand what the 'order' of systems are. Many systems have very complicated relationships between what you input into them, and what they output. 

In this relationship, the transfer function $x(\omega)$ only depends on first-order time derivatives of the input signal, the system is called 'first-order', and the output of such a system is a *recursive* or *infinite impulse response* filter (you can read more about these [here](https://en.wikipedia.org/wiki/Infinite_impulse_response)).

In these systems, now going from a continuous time system output to a discrete time system output, $y(t)\rightarrow y(t_n)\equiv y_n$, you can show that the output of this filter will be
$$
y_n = a_0x_n + a_1x_{n-1} + \cdots + b_1y_n + b_2y_{n-2}+\cdots
$$
where the $a$'s and $b$'s are called the recursion coefficients, defining the weights of each of its previous inputs and outputs. A simple low-pass filter ($a_j=0\forall j\neq 0$, $b_k=0\forall k\neq 1$) will then have the following transfer function:

$$
x(\omega) = \frac{a_0}{1-b_1\omega}
$$

The rise and decay times of a simple low-pass filter (i.e. RC circuit) follow a simple exponential form with the discrete number of samples (and therefore the time-constant of this filter) passed to the filter $x=\exp\{-1/d\}$, with $b_1=x,a_0=1-x$.

This now gives us the output of a first-order low-pass filter with time constant $d$:

$$
y_n = (1-e^{-1/d})x_n + e^{-1/d}y_{n-1}
$$

### The simplest second-order system

In order to easily add a single degree of complexity, namely to create a system in which the output depends on the second-order time derivatives of the input, we can simply chain two first-order low-pass filters together: `lpf_2 -> lpf_1 ( x_n )`. Doing so, yields the following second-order transfer function:

$$
x(\omega) = \frac{a_0}{1-b_1\omega}\cdot\frac{c_0}{1-d_1\omega} = \frac{a_0c_0}{1-(b_1+d_1)\omega+b_1d_1\omega^2}
$$
where $c$ and $d$ are the recursion coefficients of the second filter. 

We can now write the system output based on these sets of coefficients, just as before:

$$
y_n = (1-e^{-1/d_1})(1-e^{-1/d_2})x_n + (e^{-1/d_1}+e^{-1/d_2})y_{n-1} - e^{-1/d_1 - 1/d_2}y_{n-2}
$$
where $d_1$ and $d_2$ are the time constants of each of the filters, respectively.

This basic second order system is implemented in Flojoy in the [`SECOND_ORDER_SYSTEM`](https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/SECOND_ORDER_SYSTEM/SECOND_ORDER_SYSTEM.py) node.

``` python title=SECOND_ORDER_SYSTEM.py
import numpy as np
from flojoy import flojoy, OrderedPair, DefaultParams
from node_sdk.small_memory import SmallMemory

memory_key = "SECOND_ORDER_SYSTEM"


@flojoy(inject_node_metadata=True)
def SECOND_ORDER_SYSTEM(
    default: OrderedPair,
    default_params: DefaultParams,
    d1: float = 250,
    d2: float = 100,
):
    # Let's first define things that won't change over
    # each iteration: time constants, etc. ...

    node_id = default_params.node_id

    # ... and now some helper functions:
    x1 = np.exp(-1.0 / d1) if d1 > 0 else 0.0
    x2 = np.exp(-1.0 / d2) if d2 > 0 else 0.0
    ac = (1.0 - x1) * (1.0 - x2)
    bpd = x1 + x2
    bd = x1 * x2
    ...
```