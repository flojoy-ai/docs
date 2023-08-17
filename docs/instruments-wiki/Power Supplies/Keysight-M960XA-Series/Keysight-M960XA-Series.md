---
title: Connecting to Keysight M960XA-Series by Keysight in Python
sidebar_label: Keysight M960XA-Series
description: PXI source/measure units are the source and measurement resources of voltage and current for test applications requiring high accuracy, high resolution, and measurement flexibility
keywords: [power supplies, Keysight, Qcodes]
slug: /instruments-wiki/power-supplies/keysight/keysight-m960xa-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106825/Instruments/Power%20Supplies/Keysight-M960XA-Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight M960XA-Series

## Instrument Card

<div className="flex">

<div>

PXI source/measure units are the source and measurement resources of voltage and current for test applications requiring high accuracy, high resolution, and measurement flexibility

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106825/Instruments/Power%20Supplies/Keysight-M960XA-Series/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight M960XA-Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here is a Python script that uses Qcodes to connect to a Keysight M960XA-Series Power Meters:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.KeysightM960x import KeysightM960x

# Create an instance of the instrument
power_meter = KeysightM960x("power_meter", address="TCPIP0::192.168.1.1::inst0::INSTR")

# Connect to the instrument
power_meter.connect()

# Print the instrument ID
print(power_meter.get_idn())

# Set the output voltage level
power_meter.voltage_level(1.0)

# Enable the output
power_meter.output(True)

# Measure the current
current = power_meter.measure_data()[1]
print(f"Current: {current} A")

# Disable the output
power_meter.output(False)

# Disconnect from the instrument
power_meter.disconnect()
```

Note: Replace `"TCPIP0::192.168.1.1::inst0::INSTR"` with the actual address of your power meter.

</TabItem>
</Tabs>