This example demonstrates an active PID controller for a mock non-linear system to be driven to a given setpoint using `SECOND_ORDER_SYSTEM` node. 

The node modifies the input values to follow a second order system (e.g. a biexponential decay). An example equation:
$$
y_n = (1-e^{-1/d_1})(1-e^{-1/d_2})x_n + (e^{-1/d_1}+e^{-1/d_2})y_{n-1} - e^{-1/d_1 - 1/d_2}y_{n-2}
$$
where $d_1$, and $d_2$ are the time constants of each of the exponentials respectively.

The thoery behind a second order system is further explained [`here`](https://docs.flojoy.io/advanced-usage/feedback-control/model-systems/).
