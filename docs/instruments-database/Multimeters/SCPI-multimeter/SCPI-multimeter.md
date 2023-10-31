---
title: Connecting to SCPI multimeter by Generic SCPI in Python
sidebar_label: SCPI multimeter
description: All SCPI Multimeters
keywords: [multimeters, Generic SCPI, InstrumentKit]
slug: /instruments-database/multimeters/generic-scpi/SCPI-multimeter
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639438/Instruments/Multimeters/SCPI-multimeter/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SCPI multimeter

## Instrument Card

<div className="flex">

<div>

All SCPI Multimeters

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639438/Instruments/Multimeters/SCPI-multimeter/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: GENERIC</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692142672/Instruments/Vendor%20Logos/FLOJOY_TEXT.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

.

<ul>
  <li>Headquarters: nan</li>
  <li>Yearly Revenue (millions, USD): nan</li>
  <li>Vendor Website: <a href="https://en.wikipedia.org/wiki/Standard_Commands_for_Programmable_Instruments">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MULTIMETERS' manufacturer='GENERIC'></FeaturedInstrumentVideo>


## Connect to the SCPI multimeter in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MULTIMETERS' manufacturer='GENERIC'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

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