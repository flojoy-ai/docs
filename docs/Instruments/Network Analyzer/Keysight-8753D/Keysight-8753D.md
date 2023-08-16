
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 8753D

## Instrument Card

<div className="flex">

<div>

8753D Network Analyzer, 30 kHz to 3 GHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118407/Instruments/Network%20Analyzer/Keysight-8753D/Keysight-8753D.png" style={{ width: "325px" }} />

</div>

8753D Network Analyzer, 30 kHz to 3 GHz>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 8753D in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here is a Python script that uses Qcodes to connect to a Keysight 8753D Network Analyzer:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_8753D import Keysight_8753D

# Create an instance of the Keysight 8753D Network Analyzer
analyzer = Keysight_8753D("analyzer", address="GPIB0::1::INSTR")

# Connect to the instrument
analyzer.connect()

# Print the start frequency
print("Start Frequency:", analyzer.start_freq())

# Set the stop frequency to 1 GHz
analyzer.stop_freq(1e9)

# Set the number of points in the trace to 101
analyzer.trace_points(101)

# Prepare the trace
analyzer.trace.prepare_trace()

# Get the trace data
trace_data = analyzer.trace()

# Print the trace data
print("Trace Data:", trace_data)

# Disconnect from the instrument
analyzer.disconnect()
```

This script creates an instance of the `Keysight_8753D` instrument driver and connects to the instrument using the specified address. It then interacts with the instrument by setting parameters and getting trace data. Finally, it disconnects from the instrument.

</TabItem>
</Tabs>