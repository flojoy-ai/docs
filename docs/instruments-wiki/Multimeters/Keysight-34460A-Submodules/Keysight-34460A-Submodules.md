---
title: Connecting to Keysight 34460A Submodules by Keysight in Python
sidebar_label: Keysight 34460A Submodules
description: The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.
keywords: [multimeters, Keysight, Qcodes]
slug: /instruments-wiki/multimeters/keysight/keysight-34460a-submodules
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201095/Instruments/Multimeters/Keysight-34460A-Submodules/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34460A Submodules

## Instrument Card

<div className="flex">

<div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201095/Instruments/Multimeters/Keysight-34460A-Submodules/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight 34460A Submodules in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight 34460A Submodules Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_344xxA import Keysight_34411A

# Create an instance of the Keysight_34411A driver
multimeter = Keysight_34411A(name='multimeter', address='your_device_address')

# Connect to the multimeter
multimeter.connect()

# Now you can use the multimeter to perform measurements
# For example, to measure the voltage:
voltage = multimeter.volt()

# Print the measured voltage
print(f"Measured voltage: {voltage} V")

# Disconnect from the multimeter
multimeter.disconnect()
```

Make sure to replace `'your_device_address'` with the actual address of your Keysight 34460A Submodules Multimeter.

</TabItem>
</Tabs>