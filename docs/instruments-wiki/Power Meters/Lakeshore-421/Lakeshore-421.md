---
title: Lakeshore 421
description: Flexible probe configurations to suit your application.Several sensor types available with different performance characteristics.Most suited for field levels from earth field to very large electromagnets.Application-specific probe customization available.
keywords: [power meters, Lakeshore, Pymeasure]
slug: /instruments-wiki/power-meters/lakeshore/lakeshore-421
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106749/Instruments/Power%20Meters/Lakeshore-421/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore 421

## Instrument Card

<div className="flex">

<div>

Flexible probe configurations to suit your application.
Several sensor types available with different performance characteristics.
Most suited for field levels from earth field to very large electromagnets.
Application-specific probe customization available.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106749/Instruments/Power%20Meters/Lakeshore-421/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125966/Instruments/Vendor%20Logos/Lakeshore.png" style={{ width: "100%", objectFit: "cover" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions. <a href="https://www.lakeshore.com/home">Website</a>.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
</ul>
</details>

## Connect to the Lakeshore 421 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

Here is a Python script that uses Pymeasure to connect to a Lakeshore 421 Power Meter:

```python
from pymeasure.adapters import SerialAdapter
from pymeasure.instruments.lakeshore import LakeShore421

# Create a serial adapter for the instrument
adapter = SerialAdapter(port="COM1", baud_rate=9600)

# Create an instance of the LakeShore421 instrument
gaussmeter = LakeShore421(adapter)

# Connect to the instrument
gaussmeter.connect()

# Set the unit to Tesla
gaussmeter.unit = "T"

# Turn on auto-range
gaussmeter.auto_range = True

# Turn on fast-mode
gaussmeter.fast_mode = True

# Read the magnetic field
field = gaussmeter.field
print("Magnetic Field:", field)

# Set the field range to 300 Gauss
gaussmeter.field_range = 300

# Read the field range
field_range = gaussmeter.field_range
print("Field Range:", field_range)

# Disconnect from the instrument
gaussmeter.disconnect()
```

Note: Make sure to replace `"COM1"` with the appropriate serial port for your instrument.

</TabItem>
</Tabs>