---
title: Connecting to Keysight 5222B by Keysight in Python
sidebar_label: Keysight 5222B
description: The Keysight N5222B PNA Microwave Network Analyzer 10 MHz to 26.5 GHz is an integrated and flexible test engine that can measure active devices such as amplifiers, mixers, and frequency converters. This analyzer operates at a frequency range of 900 Hz to 26.5 GHz. The Keysight N5222B provides a combination of excellent hardware and powerful measurement applications to measure a broad range of devices quickly and accurately.
keywords: [network analyzers, Keysight, QCodes]
slug: /instruments-database/network-analyzers/keysight/keysight-5222b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395597/Instruments/Network%20Analyzers/Keysight-5222B/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 5222B

## Instrument Card

<div className="flex">

<div>

The Keysight N5222B PNA Microwave Network Analyzer 10 MHz to 26.5 GHz is an integrated and flexible test engine that can measure active devices such as amplifiers, mixers, and frequency converters. This analyzer operates at a frequency range of 900 Hz to 26.5 GHz. The Keysight N5222B provides a combination of excellent hardware and powerful measurement applications to measure a broad range of devices quickly and accurately.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395597/Instruments/Network%20Analyzers/Keysight-5222B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/9018-03959/technical-specifications/9018-03959.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight 5222B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 5222B Network Analyzer using Qcodes, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.Keysight.Keysight_5222B import Keysight_5222B

# Create a station to hold the instruments
station = Station()

# Connect to the Keysight 5222B Network Analyzer
na = Keysight_5222B('na', 'TCPIP0::192.168.1.1::inst0::INSTR')
station.add_component(na)

# Now you can use the `na` object to control the network analyzer
# For example, you can set the start and stop frequencies
na.start(1e6)  # Set the start frequency to 1 MHz
na.stop(1e9)  # Set the stop frequency to 1 GHz

# You can also read measurements from the network analyzer
data = na.traces[0].magnitude()  # Read the magnitude of the first trace

# Print the data
print(data)

# Close the connection to the network analyzer
na.close()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address or VISA resource string of your Keysight 5222B Network Analyzer.

</TabItem>
</Tabs>