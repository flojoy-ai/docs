---
title: Connecting to Orbit 3 Sensor by Orbit3 in Python
sidebar_label: Orbit 3 Sensor
description: Orbit 3 is a wireless sensor for ambient temperature and humidity monitoring. Install Orbit 3 at a suitable location, and it will wirelessly transmit temperature and humidity readings continuously. It can be used in precast factories, concrete laboratories, on-site – or wherever ambient climate creates value for you.
keywords: [temperature sensors, Orbit3, PyTango]
slug: /instruments-wiki/temperature-sensors/orbit3/orbit-3-sensor
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639362/Instruments/Temperature%20Sensors/Orbit-3-Sensor/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Orbit 3 Sensor

## Instrument Card

<div className="flex">

<div>

Orbit 3 is a wireless sensor for ambient temperature and humidity monitoring. Install Orbit 3 at a suitable location, and it will wirelessly transmit temperature and humidity readings continuously. It can be used in precast factories, concrete laboratories, on-site – or wherever ambient climate creates value for you.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639362/Instruments/Temperature%20Sensors/Orbit-3-Sensor/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://maturix.com/wp-content/uploads/2023/03/Orbit-3_V1.5_February2022-1.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806128/Instruments/Vendor%20Logos/Maturix.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Maturix® is the smart solution addressing the needs of the construction and concrete industry. Our aim is to increase the ease of collecting, analysing and understanding your businesses data, through wireless sensing solutions.

<ul>
  <li>Headquarters: Denmark</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://maturix.com/">here</a></li>
</ul>
</details>

## Connect to the Orbit 3 Sensor in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyTango" label="PyTango">

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