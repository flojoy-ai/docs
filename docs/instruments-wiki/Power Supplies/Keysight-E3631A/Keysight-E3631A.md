---
title: Keysight E3631A
description: E3631A 80W Triple Output Power Supply, 6V, 5A & ±25V, 1A
keywords: [power supplies, HP, Instrumentkit]
slug: /instruments-wiki/power-supplies/hp/keysight-e3631a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106905/Instruments/Power%20Supplies/Keysight-E3631A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E3631A

## Instrument Card

<div className="flex">

<div>

E3631A 80W Triple Output Power Supply, 6V, 5A & ±25V, 1A

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106905/Instruments/Power%20Supplies/Keysight-E3631A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E3631A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Keysight E3631A Power Supply using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the power supply
psu = ik.hp.HPe3631a.open_gpibusb("/dev/ttyUSB0", 10)

# Set the channel to P25V
psu.channel[2]

# Set the output voltage to 12.5V
psu.voltage = 12.5

# Read back the set voltage
print(psu.voltage)

# Read back the sensed voltage
print(psu.voltage_sense)
```

This script first imports the `instrumentkit` module as `ik`. Then, it connects to the power supply using the `open_gpibusb` method of the `HPe3631a` class, specifying the device path (`/dev/ttyUSB0`) and the GPIB address (`10`).

Next, it sets the channel to `P25V` by accessing the `channel` property of the power supply object and indexing it with `2`.

Then, it sets the output voltage to `12.5V` by assigning the desired voltage to the `voltage` property of the power supply object.

Finally, it reads back the set voltage by accessing the `voltage` property and prints it. It also reads back the sensed voltage by accessing the `voltage_sense` property and prints it.

</TabItem>
</Tabs>