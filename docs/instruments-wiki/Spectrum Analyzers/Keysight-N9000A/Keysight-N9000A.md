---
title: Connecting to Keysight N9000A by Agilent in Python
sidebar_label: Keysight N9000A
description: N9000A CXA Signal Analyzer, 9 kHz to 26.5 GHz
keywords: [spectrum analyzers, Agilent, Qcodes Community]
slug: /instruments-wiki/spectrum-analyzers/agilent/keysight-n9000a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106876/Instruments/Spectrum%20Analyzers/Keysight-N9000A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N9000A

## Instrument Card

<div className="flex">

<div>

N9000A CXA Signal Analyzer, 9 kHz to 26.5 GHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106876/Instruments/Spectrum%20Analyzers/Keysight-N9000A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight N9000A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Keysight N9000A Spectrum Analyzer using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station, Instrument
from qcodes.instrument_drivers.Keysight.Keysight_N9000A import Keysight_N9000A

# Create a station to hold the instrument
station = Station()

# Connect to the Keysight N9000A Spectrum Analyzer
n9000a = Keysight_N9000A('n9000a', 'TCPIP0::192.168.1.1::inst0::INSTR')
station.add_component(n9000a)

# Print the RF center frequency
print(n9000a.rf_center_frequency())

# Set the video bandwidth to 10 MHz
n9000a.video_bandwidth(10)

# Print the power
print(n9000a.power())

# Close the connection
n9000a.close()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address or VISA resource string of your Keysight N9000A Spectrum Analyzer.

</TabItem>
</Tabs>