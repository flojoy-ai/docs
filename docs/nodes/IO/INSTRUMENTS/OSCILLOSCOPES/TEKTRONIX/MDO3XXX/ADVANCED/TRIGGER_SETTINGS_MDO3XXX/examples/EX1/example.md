<!--Add SEO here-->

In this example, we demonstrate how to set the triggering channel for a Tektronix MDO3000 oscilloscope and how to set the trigger threshold voltage. 

:::note
The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.
:::

We must first enter the `VISA address` parameter for the three `MDO3XXX` nodes (use the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node to find the VISA address).

The [`TRIGGER_CHANNEL_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TRIGGER_CHANNEL_MDO3XXX) node can be used to either set or query the triggering channel. 

The [`TRIGGER_LEVEL_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TRIGGER_LEVEL_MDO3XXX) node is used to either set or query the triggering threshold voltage. 

The [`TRIGGER_SETTINGS_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TRIGGER_SETTINGS_MDO3XXX) node is used to either set or query more advanced trigger settings such as triggering on an voltage rise and/or fall. 

The idea of triggering in an oscilloscope is simply to determine which repeating signal to look for in order to set the frequency of the oscilloscope (see [here](https://www.electronics-notes.com/articles/test-methods/oscilloscope/oscilloscope-trigger.php) for more information).

In this example, the triggering channel is set to CH2, the trigger level is set to 50 mV, and the advanced settings are set, for example, to trigger on a voltage rise only.