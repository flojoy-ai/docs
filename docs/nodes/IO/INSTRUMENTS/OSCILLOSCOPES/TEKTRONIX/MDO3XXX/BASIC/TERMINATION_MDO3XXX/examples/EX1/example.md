In this example, we demonstrate how to query or set the termination value for a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX nodes should also work with compatible Tektronix oscilloscope: MDO4XXX, MSO4XXX, and DPO4XXX. However, those are untested as of yet.
:::

First we list the VISA devices with the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node. Knowing the serial number is C012101, we enter the VISA address that contains this into the `VISA address` parameter for all the `MDO3XXX` nodes.

The [`TERMINATION_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TERMINATION_MDO3XXX/TERMINATION_MDO3XXX.py) node can be used to either set or query the termination value for the oscilloscope channels. The termination value is also often know as the [`impedance`](https://en.wikipedia.org/wiki/Electrical_impedance). 50 and 1 million ohms (AKA high or high Z) are common values. Here we first set the termination values to 50 ohms for `CH1` and `CH2` (note in Flojoy we start counting from 0) then we query the values for each channel by setting the `set_query` parameter to query.