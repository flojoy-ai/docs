---
title: Connecting to Lakeshore 421 by Lakeshore in Python
sidebar_label: Lakeshore 421
description: Flexible probe configurations to suit your application.Several sensor types available with different performance characteristics.Most suited for field levels from earth field to very large electromagnets.Application-specific probe customization available.
keywords: [power meters, Lakeshore, PyMeasure]
slug: /instruments-database/power-meters/lakeshore/lakeshore-421
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395445/Instruments/Power%20Meters/Lakeshore-421/file.jpg
hide_table_of_contents: true
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

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395445/Instruments/Power%20Meters/Lakeshore-421/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.lakeshore.com/docs/default-source/product-downloads/421_manual.pdf?sfvrsn=df2b523_1">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: LAKESHORE</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692813206/Instruments/Vendor%20Logos/Lakeshore_Cryotronics.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
  <li>Vendor Website: <a href="https://www.lakeshore.com/home">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='POWER_METERS' manufacturer='LAKESHORE'></FeaturedInstrumentVideo>


## Connect to the Lakeshore 421 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_METERS' manufacturer='LAKESHORE'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

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