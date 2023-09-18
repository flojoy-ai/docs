In this example, we demonstrate how to extract signal traces from a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX nodes should also work with compatible Tektronix oscilloscope: MDO4XXX, MSO4XXX, and DPO4XXX. However, those are untested as of yet.
:::

First we list the VISA devices with the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node. Knowing the serial number is C012101, we enter the VISA address that contains this into the `VISA address` parameter for both EXTRACT TRACE nodes.

The [`EXTRACT_TRACE_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/EXTRACT_TRACE_MDO3XXX/EXTRACT_TRACE_MDO3XXX.py) node extracts the data from the oscilloscope for a single channel. You must first set the channel the extract from and the x axis (time) length. Here we set the top and bottom rows in the app to extract CH1 and CH2, repectively (note in Flojoy we start counting from 0). We then set the x length to 2000ns.

The [`LINE`](https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/LINE/LINE.py) node will display the data for each channel where you can see two sine waves define the two channels.
