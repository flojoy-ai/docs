<!--- Add SEO here --->

In this example, the `LINSPACE` node generates two lists (the `Ordered_pair`, composed of x and y) that are required for the `INTEGRATE` node.

The `INTEGRATE` node then applies the trapezoidal rule on the given input lists to compute the integration.

With the two `LINE` nodes, we can see that the original `LINSPACE` function is a diagonal of the form $y=x$, which is constantly increasing. The second `LINE` node, which represents the integrate result, is showing an increasing curve. This is expected since the integral of $x$ is $\frac{x^2}{2}$.
