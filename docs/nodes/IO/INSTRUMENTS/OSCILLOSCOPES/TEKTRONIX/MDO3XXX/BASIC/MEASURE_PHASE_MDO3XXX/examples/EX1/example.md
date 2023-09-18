In this example, we demonstrate how to measure the phase difference between two channels for a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX nodes should also work with compatible Tektronix oscilloscope: MDO4XXX, MSO4XXX, and DPO4XXX. However, those are untested as of yet.
:::

Sometimes an error can occur when playing an app. This may dictate that the [`CLOSE_ALL`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/CLOSE_ALL/CLOSE_ALL.py) node is used to ensure all instrument connections are closed. We enter the `VISA address` parameter for the 3 `MDO3XXX` nodes (use the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node to find the VISA address).

The two [`EXTRACT_TRACE_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/EXTRACT_TRACE_MDO3XXX/EXTRACT_TRACE_MDO3XXX.py) nodes (as well as the `COMPOSITE` NODE) are used here to visualize waveforms for CH1 and CH2.  

The [`MEASURE_PHASE_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASURE_PHASE_MDO3XXX/MEASURE_PHASE_MDO3XXX.py) then extracts the phase measurement from the oscilloscope, which is then displayed on the right side of the app (phase units = degrees). The phase node can also use various statistics such as min, max, and mean (instant/single measurement here).