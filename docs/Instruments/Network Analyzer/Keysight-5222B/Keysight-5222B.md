
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 5222B

## Instrument Card

<div className="flex">

<div>

The Keysight N5222B PNA Microwave Network Analyzer 10 MHz to 26.5 GHz is an integrated and flexible test engine that can measure active devices such as amplifiers, mixers, and frequency converters. This analyzer operates at a frequency range of 900 Hz to 26.5 GHz. The Keysight N5222B provides a combination of excellent hardware and powerful measurement applications to measure a broad range of devices quickly and accurately.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106771/Instruments/Network%20Analyzer/Keysight-5222B/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The Keysight N5222B PNA Microwave Network Analyzer 10 MHz to 26.5 GHz is an integrated and flexible test engine that can measure active devices such as amplifiers, mixers, and frequency converters. This analyzer operates at a frequency range of 900 Hz to 26.5 GHz. The Keysight N5222B provides a combination of excellent hardware and powerful measurement applications to measure a broad range of devices quickly and accurately.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width:"200px", height: "150px"}} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 5222B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight 5222B Network Analyzer using Qcodes, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.Keysight.Keysight_5222B import Keysight_5222B

# Create a station to hold the instruments
station = Station()

# Connect to the Keysight 5222B Network Analyzer
na = Keysight_5222B('na', 'TCPIP0::192.168.1.1::inst0::INSTR')
station.add_component(na)

# Print the available options on the Network Analyzer
print(na.get_options())

# Set the frequency range
na.start(1e6)
na.stop(1e9)

# Set the power range
na._set_power_limits(-30, 10)

# Enable trace averaging
na.averages_on()

# Perform a sweep and get the magnitude data
magnitude_data = na.traces[0].magnitude()

# Print the magnitude data
print(magnitude_data)

# Disconnect from the Network Analyzer
na.close()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address or VISA resource string of your Keysight 5222B Network Analyzer.

</TabItem>
</Tabs>