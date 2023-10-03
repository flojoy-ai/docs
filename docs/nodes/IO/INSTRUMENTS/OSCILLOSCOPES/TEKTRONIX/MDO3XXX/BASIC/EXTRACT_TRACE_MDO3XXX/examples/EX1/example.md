---
title: EXTRACT_TRACE_MDO3XXX
description: The EXTRACT_TRACE_MDO3XXX node extracts the phase measurement between two traces from a MDO3XXX oscilloscope.
keywords: [oscilloscope, python, extract, control, instrument, trace]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/EXTRACT_TRACE_MDO3XXX/examples/EX1/output.jpeg
---

In this example, we demonstrate how to extract signal traces from a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.
:::

We must first add the [`CONNECTION_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/) node. This will create the connection to the instrument at the beginning of the app. To allow this we must set the `VISA address` for this (and all subsequent `MDO3XXX` nodes). If the address does not appear in the parameters you may have to press `REFRESH` in the `HARDWARE MANAGER` tab.

The two [`EXTRACT_TRACE_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/EXTRACT_TRACE_MDO3XXX/EXTRACT_TRACE_MDO3XXX.py) nodes (as well as the `COMPOSITE` NODE) are used here to visualize waveforms for CH1 and CH2.  
