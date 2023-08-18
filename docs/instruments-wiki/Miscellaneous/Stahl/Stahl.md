---
title: Connecting to Stahl by Stahl in Python
sidebar_label: Stahl
description: Currently no description
keywords: [miscellaneous, Stahl, Qcodes]
slug: /instruments-wiki/miscellaneous/stahl/stahl
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692303086/Instruments/Miscellaneous/Stahl/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Stahl

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692303086/Instruments/Miscellaneous/Stahl/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692142672/Instruments/Vendor%20Logos/FLOJOY_TEXT.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

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

To connect to a Stahl Miscellaneous power supply using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.stahl import Stahl

# Create a connection to the Stahl Miscellaneous power supply
stahl = Stahl("stahl", "COM1")

# Print the IDN information of the power supply
print(stahl.get_idn())

# Access the channels of the power supply
channel1 = stahl.channel.channel1
channel2 = stahl.channel.channel2

# Set the voltage of channel 1 to 5V
channel1.voltage(5)

# Set the current of channel 2 to 1A
channel2.current(1)

# Read the temperature of the power supply
temperature = stahl.temperature()
print(f"Temperature: {temperature}°C")

# Close the connection to the power supply
stahl.close()
```

This script imports the necessary modules and creates a connection to the Stahl Miscellaneous power supply using the `Stahl` driver from Qcodes. It then prints the IDN information of the power supply, accesses the channels of the power supply, sets the voltage and current of the channels, reads the temperature of the power supply, and finally closes the connection.

</TabItem>
</Tabs>