---
title: PT 104 Picoch
description: The PT-104 is a four-channel temperature measuring data logger. It offers the ultimate in resolution (0.001 °C) and accuracy (0.015 °C). Along with temperature it can also be used to measure resistance.
keywords: [thermometer, Pico Technology , Pytango]
slug: /instruments-wiki/thermometer/pico technology /pt-104-picoch
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201200/Instruments/Thermometer/PT-104-Picoch/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PT 104 Picoch

## Instrument Card

<div className="flex">

<div>

The PT-104 is a four-channel temperature measuring data logger. It offers the ultimate in resolution (0.001 °C) and accuracy (0.015 °C). Along with temperature it can also be used to measure resistance.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201200/Instruments/Thermometer/PT-104-Picoch/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125986/Instruments/Vendor%20Logos/PicoTechnology.png" style={{ width: "100%", objectFit: "cover" }} />

Pico Technology was established in 1991 and soon became a leader in the field of [PC Oscilloscopes](https://www.picotech.com/products/oscilloscope) and [data loggers](https://www.picotech.com/products/data-logger).
Pico has always been recognized for providing innovative, cost-effective alternatives to traditional test equipment and data acquisition products. In doing so, we have made high-quality instrumentation affordable. <a href="https://www.picotech.com/">Website</a>.

<ul>
  <li>Headquarters: Texas, United States</li>
  <li>Yearly Revenue (millions, USD): 24.0</li>
</ul>
</details>

## Connect to the PT 104 Picoch in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pytango" label="Pytango">

```python
import pytango as pt

# Create a DeviceProxy for the PT-104 device
pt104 = pt.DeviceProxy("pt104/01")

# Get unit information
driver_version = pt104.read_attribute("DriverVersion").value
usb_version = pt104.read_attribute("USBVersion").value
hardware_version = pt104.read_attribute("HardwareVersion").value
variant = pt104.read_attribute("Variant").value
batch_serial = pt104.read_attribute("BatchSerial").value
cal_date = pt104.read_attribute("CalDate").value
kernel_driver_version = pt104.read_attribute("KernelDriverVersion").value

# Set mains rejection to 50 Hz
pt104.write_attribute("MainsRejection", 0)

# Set channel 1 for a PT-100 sensor
pt104.write_attribute("Channel", 1)
pt104.write_attribute("DataType", "PT100")
pt104.write_attribute("NoOfWires", 4)

# Collect data
num_samples = 30
data_values = []

for _ in range(num_samples):
    data_values.append(pt104.read_attribute("Value").value)
    pt.sleep(1)

# Close connection to device
pt104.command_inout("CloseUnit")
```

</TabItem>
</Tabs>