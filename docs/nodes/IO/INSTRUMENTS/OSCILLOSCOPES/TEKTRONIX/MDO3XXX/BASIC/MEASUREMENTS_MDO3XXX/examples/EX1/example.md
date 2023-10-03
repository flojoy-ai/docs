---
title: MEASUREMENTS_MDO3XXX
description: The MEASUREMENTS_MDO3XXX node extracts various trace measurements from a MDO3XXX oscilloscope.
keywords: [oscilloscope, python, extract, control, instrument, phase]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASUREMENTS_MDO3XXX/examples/EX1/output.jpeg
---

In this example, we demonstrate how to extract measurements from a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.
:::

We must first add the [`CONNECTION_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/) node. This will create the connection to the instrument at the beginning of the app. To allow this we must set the `VISA address` for this (and all subsequent `MDO3XXX` nodes). If the address does not appear in the parameters you may have to press `REFRESH` in the `HARDWARE MANAGER` tab.

The [`MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASUREMENTS_MDO3XXX/MEASUREMENTS_MDO3XXX.py) node extracts simple waveform measurements from the oscilloscope for a single channel. In this example, the three measurement nodes are renamed as `Period (s)`, `Frequency (Hz)`, and `Amplitude (V)`, according to the waveform measurement that each node is set to extract. 

The values of each measurement can be seen on the right side of the app. This node can also extract statistics such as `mean`, `max`, and `min`. 

The [`ADVANCED_MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/ADVANCED_MEASUREMENTS_MDO3XXX/ADVANCED_MEASUREMENTS_MDO3XXX.py) node can extract 30 additional measurements, including `jitter` and `rise` time.
