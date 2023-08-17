---
title: Stahl
description: Currently no description
keywords: [miscellaneous, Stahl, Qcodes]
slug: /instruments-wiki/miscellaneous/stahl/stahl
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201225/Instruments/Miscellaneous/Stahl/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Stahl

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201225/Instruments/Miscellaneous/Stahl/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692142672/Instruments/Vendor%20Logos/FLOJOY_TEXT.png" style={{ width: "100%", objectFit: "cover" }} />

Unable to find Vendor Description. <a href="https://r-stahl.com/en/global/home/">Website</a>.

<ul>
  <li>Headquarters: nan</li>
  <li>Yearly Revenue (millions, USD): nan</li>
</ul>
</details>

## Connect to the Stahl in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Stahl power supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.stahl import Stahl

# Create an instance of the Stahl instrument
stahl = Stahl("stahl", "COM1")

# Connect to the instrument
stahl.connect()

# Access the parameters and functions of the instrument
voltage = stahl.channel1.voltage()
current = stahl.channel1.current()
is_locked = stahl.channel1.is_locked()

# Print the values
print("Voltage:", voltage)
print("Current:", current)
print("Is Locked:", is_locked)

# Disconnect from the instrument
stahl.disconnect()
```

This script creates an instance of the `Stahl` instrument with the name "stahl" and the serial port address "COM1". It then connects to the instrument using the `connect()` method.

You can access the parameters and functions of the instrument using the instance. In this example, it retrieves the voltage, current, and lock status of channel 1 using the `voltage()`, `current()`, and `is_locked()` methods, respectively.

Finally, it prints the values and disconnects from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>