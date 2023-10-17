---
title: Connecting to LKS 425 Gaussmeter by Lakeshore in Python
sidebar_label: LKS 425 Gaussmeter
description: Lake Shore Model 425 gaussmeter provides high-end functionality and performance in an affordable desktop instrument. Magnet testing and sorting have never been easier. When used in combination with the built-in relay and audible alarm features, the Model 425 takes the guesswork out of pass/fail criteria. Additional features including DC to 10 kHz AC frequency response, max hold and relative measurement make the Model 425 the ideal tool for your manufacturing, quality control and R&D flux density measurement applications. Put the Model 425 gaussmeter to use with confidence knowing it’s supported by industry leading experts in magnet measurement instrument, sensor, and Hall probe technology.
keywords: [power meters, Lakeshore, PyTango]
slug: /instruments-database/power-meters/lakeshore/lks-425-gaussmeter
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395491/Instruments/Power%20Meters/LKS-425-Gaussmeter/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LKS 425 Gaussmeter

## Instrument Card

<div className="flex">

<div>

Lake Shore Model 425 gaussmeter provides high-end functionality and performance in an affordable desktop instrument. Magnet testing and sorting have never been easier. When used in combination with the built-in relay and audible alarm features, the Model 425 takes the guesswork out of pass/fail criteria. Additional features including DC to 10 kHz AC frequency response, max hold and relative measurement make the Model 425 the ideal tool for your manufacturing, quality control and R&D flux density measurement applications. Put the Model 425 gaussmeter to use with confidence knowing it’s supported by industry leading experts in magnet measurement instrument, sensor, and Hall probe technology.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395491/Instruments/Power%20Meters/LKS-425-Gaussmeter/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.lakeshore.com/docs/default-source/product-downloads/catalog/425.pdf?sfvrsn=1581d8be_6">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692813206/Instruments/Vendor%20Logos/Lakeshore_Cryotronics.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
  <li>Vendor Website: <a href="https://www.lakeshore.com/home">here</a></li>
</ul>
</details>

## Connect to the LKS 425 Gaussmeter in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyTango" label="PyTango">

To connect to a Lake Shore Model 425 Gaussmeter using Pytango, you can use the following code:

```python
import PyTango

# Create a DeviceProxy for the Gaussmeter
gaussmeter_proxy = PyTango.DeviceProxy("device/hostname/instance")

# Call the relevant methods on the Gaussmeter proxy
# For example, to get the serial number:
serial_number = gaussmeter_proxy.read_attribute("SerialNumber").value

# To get the current magnetic field reading:
magnetic_field = gaussmeter_proxy.read_attribute("MagneticField").value

# To set the measurement range:
gaussmeter_proxy.write_attribute("MeasurementRange", 1)

# To start a measurement:
gaussmeter_proxy.command_inout("StartMeasurement")

# To stop a measurement:
gaussmeter_proxy.command_inout("StopMeasurement")
```

Note that you need to replace `"device/hostname/instance"` with the actual Tango device name or alias for your Lake Shore Model 425 Gaussmeter.

</TabItem>
</Tabs>