<!--- Add SEO here --->

In this example, the `LINSPACE` node creates a linear function, which generates two lists that are required inputs for the `DIFFERENTIATE` node.

The `DIFFERENTIATE` node then computes the derivative of the array, y with respect to x. This output is visualized as a constant line, as expected, with the `LINE` node.

The other `LINE` node, which takes the `LINSPACE` node outpout as an input, visualizes a diagonal line that represents the original function.
