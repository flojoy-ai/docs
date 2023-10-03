---
title: TERMINATION_MDO3XXX
description: The TERMINATION_MDO3XXX node sets the termination value for a MDO3XXX oscilloscope.
keywords: [oscilloscope, python, extract, control, instrument, termination]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TERMINATION_MDO3XXX/examples/EX1/output.jpeg
---

In this example, we demonstrate how to change the trigger settings for a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.
:::

We must first add the [`CONNECTION_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/) node. This will create the connection to the instrument at the beginning of the app. To allow this we must set the `VISA address` for this (and all subsequent `MDO3XXX` nodes). If the address does not appear in the parameters you may have to press `REFRESH` in the `HARDWARE MANAGER` tab.

Three other nodes were also added:

The [`TERMINATION_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TERMINATION_MDO3XXX/TERMINATION_MDO3XXX.py) node can be used to either set or query the termination value for the oscilloscope channels. The termination value is also often known as the [`impedance`](https://en.wikipedia.org/wiki/Electrical_impedance), for which 50 and 1 million ohms (AKA high or high Z) are common values.

The [`TRIGGER_CHANNEL_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TRIGGER_CHANNEL_MDO3XXX) node can be used to either set or query the triggering channel.

The [`TRIGGER_LEVEL_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TRIGGER_LEVEL_MDO3XXX) node is used to either set or query the triggering threshold voltage.

In this example we set the termination value to 50 ohm, the channel to `ch1`, and the trigger level to 0 V.
