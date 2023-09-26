<!--Add SEO here-->

In this example, we demonstrate how to extract advanced measurements from a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.
:::

First, we list the VISA devices with the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node. Knowing that the serial number is C012101, we enter the VISA address that contains this into the `VISA address` parameter for both of the `EXTRACT_TRACE` nodes.

Unlike the [`MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASUREMENTS_MDO3XXX/MEASUREMENTS_MDO3XXX.py) node, for the [`ADVANCED_MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/ADVANCED_MEASUREMENTS_MDO3XXX/ADVANCED_MEASUREMENTS_MDO3XXX.py) node you must manually enter the measurement that you want to extract. 

This node can also extract statistics for the measurements such as `mean`, `max`, and `min`. 

Possible measurements include the following: 

    amplitude, area, burst, carea, cmean, crms, delay, distduty, extinctdb, extinctpct, extinctratio, eyeheight, eyewidth, fall, frequency, high, hits, low, maximum, mean, median, minimum, ncross, nduty, novershoot, nwidth, pbase, pcross, pctcross, pduty, peakhits, period, phase, pk2pk, pkpkjitter, pkpknoise, povershoot, ptop, pwidth, qfactor, rise, rms, rmsjitter, rmsnoise, sigma1, sigma2, sigma3, sixsigmajit, snratio, stddev, undefined, waveforms

**Note:** Not all of these measurements were tested.