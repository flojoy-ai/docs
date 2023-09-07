---
title: Connecting to Keithley 6485 by Keithley in Python
sidebar_label: Keithley 6485
description: The 5½-digit Model 6485 Picoammeter combines Keithley’s expertise in sensitive current measurement instrumentation with enhanced speed and a robust design. With eight current measurement ranges and high speed autoranging, this cost effective instrument can measure currents from 2nA to 20mA, taking measurements at speeds up to 1000 readings per second. The Model 6485’s 10fA resolution and superior sensitivity make it well suited for characterising low current phenomena, while its 20mA range lets it measure currents high enough for applications such as measuring 4-20mA sensor loops.
keywords: [power meters, Keithley, PyTango]
slug: /instruments-database/power-meters/keithley/keithley-6485
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692650072/Instruments/Power%20Meters/Keithley-6485/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6485

## Instrument Card

<div className="flex">

<div>

The 5½-digit Model 6485 Picoammeter combines Keithley’s expertise in sensitive current measurement instrumentation with enhanced speed and a robust design. With eight current measurement ranges and high speed autoranging, this cost effective instrument can measure currents from 2nA to 20mA, taking measurements at speeds up to 1000 readings per second. The Model 6485’s 10fA resolution and superior sensitivity make it well suited for characterising low current phenomena, while its 20mA range lets it measure currents high enough for applications such as measuring 4-20mA sensor loops.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692650072/Instruments/Power%20Meters/Keithley-6485/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-6485-Datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806202/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

## Connect to the Keithley 6485 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyTango" label="PyTango">

```python
import PyTango

# Create a DeviceProxy for the Keithley 6485 Power Meter
device_proxy = PyTango.DeviceProxy("device_name")

# Connect to the device
device_proxy.connect()

# Read the power measurement
power_measurement = device_proxy.read_attribute("attribute_name").value

# Print the power measurement
print(power_measurement)

# Disconnect from the device
device_proxy.disconnect()
```

In the code above, replace "device_name" with the actual name of the Keithley 6485 Power Meter device in your Tango database. Replace "attribute_name" with the name of the attribute you want to read from the device, such as "Power" or "Voltage".

</TabItem>
</Tabs>