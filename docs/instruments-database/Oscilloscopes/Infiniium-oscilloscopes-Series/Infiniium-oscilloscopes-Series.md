---
title: Connecting to Infiniium oscilloscopes Series by Keysight in Python
sidebar_label: Infiniium oscilloscopes Series
description: Infiniium series oscilloscopes feature application-specific software that allows you to gain valuable insight into your design. Whether you are solving tough jitter or noise problems, removing loss due to cables or probes, or simply looking at protocol, this series has the software tools to help you realize your best design.
keywords: [oscilloscopes, Keysight, QCodes]
slug: /instruments-database/oscilloscopes/keysight/infiniium-oscilloscopes-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395543/Instruments/Oscilloscopes/Infiniium-oscilloscopes-Series/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Infiniium oscilloscopes Series

## Instrument Card

<div className="flex">

<div>

Infiniium series oscilloscopes feature application-specific software that allows you to gain valuable insight into your design. Whether you are solving tough jitter or noise problems, removing loss due to cables or probes, or simply looking at protocol, this series has the software tools to help you realize your best design.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395543/Instruments/Oscilloscopes/Infiniium-oscilloscopes-Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-04261/data-sheets/5991-3904.pdf">here</a></p>

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

## Connect to the Infiniium oscilloscopes Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

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
waveform_data = channel1.trace()

# Print the waveform data
print(waveform_data)

# Disconnect from the oscilloscope
oscilloscope.close()
```

Note: Replace `"TCPIP0::192.168.1.1::INSTR"` with the actual VISA address of your oscilloscope.

</TabItem>
</Tabs>