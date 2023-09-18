In this example, we demonstrate how to extract measurements from a Tektronix MDO3000 oscilloscope. 

:::note
The MDO3XXX nodes should also work with compatible Tektronix oscilloscope: MDO4XXX, MSO4XXX, and DPO4XXX. However, those are untested as of yet.
:::

First we list the VISA devices with the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node. Knowing the serial number is C012101, we enter the VISA address that contains this into the `VISA address` parameter for the 3 measurements nodes.

The [`MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASUREMENTS_MDO3XXX/MEASUREMENTS_MDO3XXX.py) node extracts simple waveform measurements from the oscilloscope for a single channel. Here the three measurement nodes are renamed `Period (s)`, `Frequency (Hz)`, and `Amplitude (V)` for the waveform measurement each node is set to extract. 

The values of each measurement can be seen on the right side of the app. We note that the `MEASUREMENTS_MDO3XXX` can extract these three measurements as well as statistics for them such as `mean`, `max`, and `min`. The [`ADVANCED_MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/ADVANCED_MEASUREMENTS_MDO3XXX/ADVANCED_MEASUREMENTS_MDO3XXX.py) node can extract 30 additional measurements such as jitter and rise time.
