---
title: Connecting to FJ Series by Glassman in Python
sidebar_label: FJ Series
description: FJ Series - 120W regulated high voltage AC-DC power supplies with outputs from 0 - 1kVDC to 0 - 60kVDC
keywords: [power supplies, Glassman, Instrumentkit]
slug: /instruments-wiki/power-supplies/glassman/fj-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201086/Instruments/Power%20Supplies/FJ-Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FJ Series

## Instrument Card

<div className="flex">

<div>

FJ Series - 120W regulated high voltage AC-DC power supplies with outputs from 0 - 1kVDC to 0 - 60kVDC

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201086/Instruments/Power%20Supplies/FJ-Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125998/Instruments/Vendor%20Logos/Glassman.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Looking for the leading manufacturer of AC-DC **power** supplies, DC-DC converters, high voltage, RF & custom **power** products? Discover our extensive range. <a href="https://www.xppower.com">Website</a>.

<ul>
  <li>Headquarters: Singapore</li>
  <li>Yearly Revenue (millions, USD): 295.0</li>
</ul>
</details>

## Connect to the FJ Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a FJ Series Power Supply using Instrumentkit, you can use the `GlassmanFR` class from the provided code. Here's an example script:

```python
import instrumentkit as ik

# Connect to the power supply
psu = ik.glassman.GlassmanFR.open_serial('/dev/ttyUSB0', 9600)

# Set the output voltage to 100V
psu.voltage = 100

# Turn on the power supply
psu.output = True

# Read the output voltage
voltage = psu.voltage
print(voltage)
```

This script first imports the `instrumentkit` module as `ik`. Then, it creates an instance of the `GlassmanFR` class by calling the `open_serial` method and passing the serial port name and baud rate as arguments.

Next, it sets the output voltage of the power supply to 100V by assigning the desired voltage value to the `voltage` property of the `psu` object.

After that, it turns on the power supply by assigning `True` to the `output` property of the `psu` object.

Finally, it reads the output voltage by accessing the `voltage` property of the `psu` object and prints the result.

Note that you may need to modify the serial port name and baud rate to match your specific setup.

</TabItem>
</Tabs>