
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 8722ES 

## Instrument Card

<div className="flex">

<div>

The Agilent 8722ES Vector Network Analyzer (VNA) allows users to test a RF device’s amplitude and phase with one instrument. It works within 50 MHz to 40 GHz and enables the complete characterization of a device or network.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106814/Instruments/Network%20Analyzer/Keysight-8722ES/file.webp" style={{width:"256px", height: "200px"}} />

</div>

The Agilent 8722ES Vector Network Analyzer (VNA) allows users to test a RF device’s amplitude and phase with one instrument. It works within 50 MHz to 40 GHz and enables the complete characterization of a device or network.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width:"200px", height: "150px"}} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 8722ES  in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments import visa
from pymeasure.instruments.agilent import Agilent8722ES

# Connect to the instrument
resource_manager = visa.ResourceManager()
instrument = Agilent8722ES(resource_manager.open_resource('GPIB0::1::INSTR'))

# Set the start and stop frequencies
instrument.start_frequency = 1e6  # 1 MHz
instrument.stop_frequency = 1e9  # 1 GHz

# Set the number of scan points
instrument.scan_points = 101

# Perform a single scan
instrument.scan_single()

# Get the frequencies and data from the scan
frequencies = instrument.frequencies
data_magnitude = instrument.data_magnitude
data_phase = instrument.data_phase

# Print the frequencies and data
for frequency, magnitude, phase in zip(frequencies, data_magnitude, data_phase):
    print(f"Frequency: {frequency} Hz, Magnitude: {magnitude} dB, Phase: {phase} degrees")

# Disconnect from the instrument
instrument.disconnect()
```

This script connects to the instrument using the VISA library, sets the start and stop frequencies, and performs a single scan. It then retrieves the frequencies, magnitude, and phase data from the scan and prints them out. Finally, it disconnects from the instrument.

Note: Make sure to install the necessary dependencies (`pymeasure`, `pyvisa`, and `numpy`) before running the script.

</TabItem>
</Tabs>