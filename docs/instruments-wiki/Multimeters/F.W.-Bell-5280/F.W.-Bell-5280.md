---
title: Connecting to F.W. Bell 5280 by F.W. Bell in Python
sidebar_label: F.W. Bell 5280
description: Handheld single-axis digital magnetometer gauss / tesla meter for measuring magnets, magnetism of steel, and other manufacturing and scientific applications.
keywords: [multimeters, F.W. Bell, Pymeasure]
slug: /instruments-wiki/multimeters/fw-bell/fw-bell-5280
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201239/Instruments/Multimeters/F.W.-Bell-5280/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# F.W. Bell 5280

## Instrument Card

<div className="flex">

<div>

Handheld single-axis digital magnetometer gauss / tesla meter for measuring magnets, magnetism of steel, and other manufacturing and scientific applications.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201239/Instruments/Multimeters/F.W.-Bell-5280/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125981/Instruments/Vendor%20Logos/F.W.Bell.png" style={{ width: "100%", objectFit: "cover" }} />

Technology leaders in instrumentation. Designing and manufacturing **F.W. Bell** gaussmeters, probes, current sensors and Hall generators for over 60 years. <a href="https://fwbell.com/">Website</a>.

<ul>
  <li>Headquarters: UK (Meggit)</li>
  <li>Yearly Revenue (millions, USD): nan</li>
</ul>
</details>

## Connect to the F.W. Bell 5280 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments import SerialInstrument
from pymeasure.adapters import SerialAdapter

# Create a SerialAdapter for the instrument
adapter = SerialAdapter(port='/dev/ttyUSB0', baudrate=2400, timeout=500)

# Create a SerialInstrument object for the F.W. Bell 5080 Handheld Gaussmeter
meter = SerialInstrument(adapter, name="F.W. Bell 5080 Handheld Gaussmeter")

# Connect to the instrument
meter.open()

# Set the measurement units to Gauss
meter.units = 'gauss'

# Set the range to 1 (3 kG)
meter.range = 1

# Read and print a field measurement in G
print(meter.field)

# Sample 100 field measurements
fields = meter.fields(100)

# Print the mean and standard deviation of the samples
print(fields.mean(), fields.std())

# Close the connection to the instrument
meter.close()
```

This script connects to the F.W. Bell 5080 Handheld Gaussmeter using a SerialAdapter and creates a SerialInstrument object for it. It then sets the measurement units to Gauss and the range to 1 (3 kG). It reads and prints a field measurement in G, samples 100 field measurements, and prints the mean and standard deviation of the samples. Finally, it closes the connection to the instrument.

</TabItem>
</Tabs>