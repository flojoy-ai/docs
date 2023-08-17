---
title: Connecting to Orbit 3 Sensor by Orbit3 in Python
sidebar_label: Orbit 3 Sensor
description: Orbit 3 is a wireless sensor for ambient temperature and humidity monitoring. Install Orbit 3 at a suitable location, and it will wirelessly transmit temperature and humidity readings continuously. It can be used in precast factories, concrete laboratories, on-site – or wherever ambient climate creates value for you.
keywords: [humidity sensor, Orbit3, Pytango]
slug: /instruments-wiki/humidity-sensor/orbit3/orbit-3-sensor
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201055/Instruments/Humidity%20Sensor/Orbit-3-Sensor/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Orbit 3 Sensor

## Instrument Card

<div className="flex">

<div>

Orbit 3 is a wireless sensor for ambient temperature and humidity monitoring. Install Orbit 3 at a suitable location, and it will wirelessly transmit temperature and humidity readings continuously. It can be used in precast factories, concrete laboratories, on-site – or wherever ambient climate creates value for you.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201055/Instruments/Humidity%20Sensor/Orbit-3-Sensor/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692142672/Instruments/Vendor%20Logos/FLOJOY_TEXT.png" style={{ width: "100%", objectFit: "cover" }} />

Unable to find Vendor Description. <a href="https://www.solartronmetrology.com/">Website</a>.

<ul>
  <li>Headquarters: nan</li>
  <li>Yearly Revenue (millions, USD): nan</li>
</ul>
</details>

## Connect to the Orbit 3 Sensor in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pytango" label="Pytango">

```python
import PyTango

# Create a DeviceProxy object to connect to the Orbit 3 Sensor Temperature Sensor
device_proxy = PyTango.DeviceProxy("device_name")

# Read the temperature attribute
temperature = device_proxy.read_attribute("temperature").value

# Print the temperature value
print("Temperature:", temperature)
```

In the code above, replace `"device_name"` with the actual name of the Orbit 3 Sensor Temperature Sensor device. This code connects to the device using PyTango's `DeviceProxy` class, reads the `temperature` attribute, and prints the temperature value.

</TabItem>
</Tabs>