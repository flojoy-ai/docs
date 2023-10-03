---
title: ADVANCED_MEASUREMENTS_MDO3XXX
description: The ADVANCED_MEASUREMENTS_MDO3XXX node can extract many trace measurements from the MDO3000 series oscilloscopes.
keywords: [oscilloscope, python, extract, control, instrument, measurement, rise time]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/ADVANCED_MEASUREMENTS_MDO3XXX/examples/EX1/output.jpeg
---

In this example, we demonstrate how to extract advanced measurements from a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.
:::

We must first add the [`CONNECTION_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/) node. This will create the connection to the instrument at the beginning of the app. To allow this we must set the `VISA address` for this (and all subsequent `MDO3XXX` nodes). If the address does not appear in the parameters you may have to press `REFRESH` in the `HARDWARE MANAGER` tab.

Unlike the [`MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASUREMENTS_MDO3XXX/MEASUREMENTS_MDO3XXX.py) node, for the [`ADVANCED_MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/ADVANCED_MEASUREMENTS_MDO3XXX/ADVANCED_MEASUREMENTS_MDO3XXX.py) node you must manually enter the measurement that you want to extract. Here we set the node to extract the rise time by entering `rise` in the `measurement` parameter.

This node can also extract statistics for the measurements such as `mean`, `max`, and `min`. 

Possible measurements include the following: 

    amplitude, area, burst, carea, cmean, crms, delay, distduty, extinctdb, extinctpct, extinctratio, eyeheight, eyewidth, fall, frequency, high, hits, low, maximum, mean, median, minimum, ncross, nduty, novershoot, nwidth, pbase, pcross, pctcross, pduty, peakhits, period, phase, pk2pk, pkpkjitter, pkpknoise, povershoot, ptop, pwidth, qfactor, rise, rms, rmsjitter, rmsnoise, sigma1, sigma2, sigma3, sixsigmajit, snratio, stddev, undefined, waveforms

:::note
Not all of these measurements were tested.
:::
