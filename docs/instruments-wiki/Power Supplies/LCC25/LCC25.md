---
title: LCC25
description: The LCC25 is a liquid crystal controller compatible with all Thorlabs LC VariableRetarders. The LCC25 will drive most nematic liquid crystal devices. The liquid crystaldevice is connected to the BNC voltage output port. The amplitude of the output voltage,adjusted by the front panel knob, and external signal, and a computer via a USB interface,controls the retardance of the LC device.
keywords: [power supplies, Thorlabs, Instrumentkit]
slug: /instruments-wiki/power-supplies/thorlabs/lcc25
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201003/Instruments/Power%20Supplies/LCC25/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LCC25

## Instrument Card

<div className="flex">

<div>

The LCC25 is a liquid crystal controller compatible with all Thorlabs LC Variable
Retarders. The LCC25 will drive most nematic liquid crystal devices. The liquid crystal
device is connected to the BNC voltage output port. The amplitude of the output voltage,
adjusted by the front panel knob, and external signal, and a computer via a USB interface,
controls the retardance of the LC device.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201003/Instruments/Power%20Supplies/LCC25/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126009/Instruments/Vendor%20Logos/Thorlabs.png" style={{ width: "100%", objectFit: "cover" }} />

Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million. <a href="https://www.thorlabs.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
</ul>
</details>

## Connect to the LCC25 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is an example Python script that uses Instrumentkit to connect to a LCC25 Power Supply:

```python
from instrumentkit import ThorlabsPM100USB

# Connect to the power meter
power_meter = ThorlabsPM100USB()

# Read the measurement from the power meter
measurement = power_meter.read()

# Print the measurement
print(f"Measurement: {measurement}")
```

In this script, we import the `ThorlabsPM100USB` class from the `instrumentkit` module. We then create an instance of the `ThorlabsPM100USB` class called `power_meter`. This will automatically connect to the power meter.

We can then use the `read()` method of the `power_meter` object to read a measurement from the power meter. The measurement is returned as a `pint.Quantity` object, which represents a numerical value with associated units.

Finally, we print the measurement to the console using f-string formatting.

</TabItem>
</Tabs>