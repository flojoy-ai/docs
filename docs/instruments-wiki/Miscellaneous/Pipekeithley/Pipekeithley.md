---
title: Connecting to Pipekeithley by Keithley in Python
sidebar_label: Pipekeithley
description: Class For Getting Data From The Keihtley Of The Photon-Ion Spectrometer (Pipe).
keywords: [miscellaneous, Keithley, Pytango]
slug: /instruments-wiki/miscellaneous/keithley/pipekeithley
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692301787/Instruments/Miscellaneous/Pipekeithley/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pipekeithley

## Instrument Card

<div className="flex">

<div>

Class For Getting Data From The Keihtley Of The Photon-Ion Spectrometer (Pipe).

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692301787/Instruments/Miscellaneous/Pipekeithley/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Pipekeithley in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Pytango" label="Pytango">

Here's an example of a Python script that uses Pytango to connect to a Pipekeithley Miscellaneous device:

```python
import PyTango

# Define the device name
device_name = "pipe/keithley/miscellaneous/1"

# Create a PyTango DeviceProxy object
device_proxy = PyTango.DeviceProxy(device_name)

# Check if the device is online
if device_proxy.ping():
    print("Device is online")
else:
    print("Device is offline")

# Read a scalar attribute from the device
attribute_name = "SomeScalarAttribute"
attribute_value = device_proxy.read_attribute(attribute_name).value
print(f"{attribute_name}: {attribute_value}")

# Write a value to a scalar attribute
new_value = 42
device_proxy.write_attribute(attribute_name, new_value)

# Read the attribute again to verify the new value
attribute_value = device_proxy.read_attribute(attribute_name).value
print(f"{attribute_name}: {attribute_value}")
```

In this script, we first import the `PyTango` module. Then, we define the `device_name` variable with the name of the Pipekeithley Miscellaneous device we want to connect to.

Next, we create a `DeviceProxy` object using the `device_name`. This object allows us to interact with the device.

We use the `ping()` method of the `DeviceProxy` object to check if the device is online. If it returns `True`, we print "Device is online", otherwise we print "Device is offline".

We then read a scalar attribute from the device using the `read_attribute()` method of the `DeviceProxy` object. The attribute name is specified in the `attribute_name` variable. The value of the attribute is accessed using the `value` attribute of the returned `AttributeProxy` object.

After that, we write a new value to the scalar attribute using the `write_attribute()` method of the `DeviceProxy` object. The new value is specified in the `new_value` variable.

Finally, we read the attribute again to verify the new value and print it.

Note: Replace `"pipe/keithley/miscellaneous/1"` with the actual device name you want to connect to, and `"SomeScalarAttribute"` with the name of the scalar attribute you want to read/write.

</TabItem>
</Tabs>