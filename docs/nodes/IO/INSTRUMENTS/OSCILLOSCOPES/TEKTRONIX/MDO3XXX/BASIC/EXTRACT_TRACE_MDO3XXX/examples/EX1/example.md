<!--Add SEO here-->

In this example, we demonstrate how to extract signal traces from a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.
:::

First, we list the VISA devices with the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node. Knowing that the serial number is C012101, we enter the VISA address that contains this into the `VISA address` parameter for both of the `EXTRACT_TRACE` nodes.

The [`EXTRACT_TRACE_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/EXTRACT_TRACE_MDO3XXX/EXTRACT_TRACE_MDO3XXX.py) node extracts the data from the oscilloscope for a single channel. You must first set the channel that you want to extract from and the x-axis (time) length. In this example, we set the top and bottom rows in the app to extract CH1 and CH2, repectively (note that in Flojoy we start counting from 0). We then set the x length to 2000ns.

The [`LINE`](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/LINE/LINE.py) node will display the data for each channel, where the two sine waves define the two channels.
