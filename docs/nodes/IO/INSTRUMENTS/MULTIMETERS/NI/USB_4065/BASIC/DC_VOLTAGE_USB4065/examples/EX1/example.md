In this example, we demonstrate how to measure DC current and voltage with a NI USB-4065 DMM

:::note
This node has only been tested on Windows 10/11 64-bit.
:::

We first added the [`CONNECTION_4065`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/MULTIMETERS/NI/USB_4065/BASIC). Then two nodes: [`DC_CURRENT_4065`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/MULTIMETERS/NI/USB_4065/BASIC) and [`DC_VOLTAGE_4065`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/MULTIMETERS/NI/USB_4065/BASIC). We also added two [`BIG_NUMBER`](https://github.com/flojoy-ai/nodes/blob/develop/VISUALIZERS/PLOTLY/BIG_NUMBER/BIG_NUMBER.py) nodes to view the results.

The `CONNECTION_4065` node is used to connect Flojoy to the instrument. The `NI address` must be found with NI MAX or similar NI apps. Here it was set to `Dev1`.

The `DC_CURRENT_4065` and `DC_VOLTAGE_4065` node measure DC current and voltage respectively. The `NI address` must also be set here. 
