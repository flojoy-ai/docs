<!--Add SEO here-->

In this example, we demonstrate how to extract measurements from a Tektronix MDO3000 oscilloscope. 

**Note:** The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.

First, we list the VISA devices with the [`LIST_VISA`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/QCODES/LIST_VISA/LIST_VISA.py) node. Knowing that the serial number is C012101, we enter the VISA address that contains this into the `VISA address` parameter for the three measurement nodes.

The [`MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASUREMENTS_MDO3XXX/MEASUREMENTS_MDO3XXX.py) node extracts simple waveform measurements from the oscilloscope for a single channel. In this example, the three measurement nodes are renamed as `Period (s)`, `Frequency (Hz)`, and `Amplitude (V)`, according to the waveform measurement that each node is set to extract. 

The values of each measurement can be seen on the right side of the app. This node can also extract statistics such as `mean`, `max`, and `min`. 

The [`ADVANCED_MEASUREMENTS_MDO3XXX`](https://github.com/flojoy-ai/nodes/blob/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/ADVANCED_MEASUREMENTS_MDO3XXX/ADVANCED_MEASUREMENTS_MDO3XXX.py) node can extract 30 additional measurements, including `jitter` and `rise` time.
