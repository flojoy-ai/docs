---
title: Infiniium oscilloscopes Series
description: Infiniium series oscilloscopes feature application-specific software that allows you to gain valuable insight into your design. Whether you are solving tough jitter or noise problems, removing loss due to cables or probes, or simply looking at protocol, this series has the software tools to help you realize your best design.
keywords: [oscilloscopes, Keysight, Qcodes]
slug: /instruments-wiki/oscilloscopes/keysight/infiniium-oscilloscopes-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200890/Instruments/Oscilloscopes/Infiniium-oscilloscopes-Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Infiniium oscilloscopes Series

## Instrument Card

<div className="flex">

<div>

Infiniium series oscilloscopes feature application-specific software that allows you to gain valuable insight into your design. Whether you are solving tough jitter or noise problems, removing loss due to cables or probes, or simply looking at protocol, this series has the software tools to help you realize your best design.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200890/Instruments/Oscilloscopes/Infiniium-oscilloscopes-Series/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Infiniium oscilloscopes Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here is an example Python script that uses Qcodes to connect to an Infiniium oscilloscope:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.KeysightInfiniium import KeysightInfiniium

# Connect to the oscilloscope
oscilloscope = KeysightInfiniium("oscilloscope", "TCPIP0::192.168.1.1::INSTR")

# Print the IDN of the oscilloscope
print(oscilloscope.IDN())

# Set up the oscilloscope parameters
oscilloscope.run_mode("STOP")
oscilloscope.acquire_points(1000)
oscilloscope.sample_rate(1e9)

# Take a single acquisition
oscilloscope.single()

# Read the waveform data from channel 1
channel1 = oscilloscope.channels[0]
waveform = channel1.trace()

# Print the waveform data
print(waveform)

# Disconnect from the oscilloscope
oscilloscope.close()
```

Note: Replace `"TCPIP0::192.168.1.1::INSTR"` with the actual VISA address of your oscilloscope.

</TabItem>
</Tabs>