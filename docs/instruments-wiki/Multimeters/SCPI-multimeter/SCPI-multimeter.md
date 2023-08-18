---
title: Connecting to SCPI multimeter by Generic SCPI in Python
sidebar_label: SCPI multimeter
description: All SCPI Multimeters
keywords: [multimeters, Generic SCPI, Instrumentkit]
slug: /instruments-wiki/multimeters/generic-scpi/SCPI-multimeter
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692107011/Instruments/Multimeters/SCPI-multimeter/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SCPI multimeter

## Instrument Card

<div className="flex">

<div>

All SCPI Multimeters

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692107011/Instruments/Multimeters/SCPI-multimeter/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692142672/Instruments/Vendor%20Logos/FLOJOY_TEXT.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

. <a href="https://en.wikipedia.org/wiki/Standard_Commands_for_Programmable_Instruments">Website</a>.

<ul>
  <li>Headquarters: nan</li>
  <li>Yearly Revenue (millions, USD): nan</li>
</ul>
</details>

## Connect to the SCPI multimeter in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a SCPI multimeter using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the multimeter
multimeter = ik.SCPIMultimeter.open_tcpip("192.168.1.1")

# Set the measurement mode to voltage DC
multimeter.mode = multimeter.Mode.voltage_dc

# Perform a measurement
measurement = multimeter.measure()

# Print the measurement result
print(measurement)
```

This code connects to the multimeter using the `open_tcpip` method, sets the measurement mode to voltage DC using the `mode` property, performs a measurement using the `measure` method, and prints the measurement result.

</TabItem>
</Tabs>