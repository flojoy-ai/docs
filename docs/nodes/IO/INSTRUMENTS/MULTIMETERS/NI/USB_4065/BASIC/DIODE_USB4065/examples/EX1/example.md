In this example, we demonstrate how to measure diode voltage with a NI USB-4065 DMM

:::note
This node has only been tested on Windows 10/11 64-bit.
:::

We first added the [`CONNECTION_4065`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/MULTIMETERS/NI/USB_4065/BASIC). Then the node: [`DIODE_4065`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/MULTIMETERS/NI/USB_4065/BASIC). We also added a [`BIG_NUMBER`](https://github.com/flojoy-ai/nodes/blob/develop/VISUALIZERS/PLOTLY/BIG_NUMBER/BIG_NUMBER.py) nodes to view the results.

The `CONNECTION_4065` node is used to connect Flojoy to the instrument. The `NI address` must be found with NI MAX or similar NI apps. Here it was set to `Dev1`.

The `DIODE_4065` node measures DC voltage drop across a diode. The `NI address` must also be set here.
