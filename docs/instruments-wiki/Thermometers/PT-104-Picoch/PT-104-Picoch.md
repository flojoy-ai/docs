---
title: Connecting to PT 104 Picoch by Pico Technology in Python
sidebar_label: PT 104 Picoch
description: The PT-104 is a four-channel temperature measuring data logger. It offers the ultimate in resolution (0.001 °C) and accuracy (0.015 °C). Along with temperature it can also be used to measure resistance.
keywords: [thermometers, Pico Technology, PyTango]
slug: /instruments-wiki/thermometers/pico-technology/pt-104-picoch
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395499/Instruments/Thermometers/PT-104-Picoch/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PT 104 Picoch

## Instrument Card

<div className="flex">

<div>

The PT-104 is a four-channel temperature measuring data logger. It offers the ultimate in resolution (0.001 °C) and accuracy (0.015 °C). Along with temperature it can also be used to measure resistance.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395499/Instruments/Thermometers/PT-104-Picoch/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125986/Instruments/Vendor%20Logos/PicoTechnology.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

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
<TabItem value="PyTango" label="PyTango">

```python
import pytango as pt

# Create a DeviceProxy for the PT-104 device
pt104 = pt.DeviceProxy("pt104/01")

# Get unit information
driver_version = pt104.driver_version
usb_version = pt104.usb_version
hardware_version = pt104.hardware_version
variant = pt104.variant
batch_serial = pt104.batch_serial
cal_date = pt104.cal_date
kernel_driver_version = pt104.kernel_driver_version

# Set mains rejection to 50 Hz
pt104.set_mains(0)

# Set channel 1 for a PT-100 sensor
pt104.set_channel(1, "PT100", 4)

# Collect data
num_samples = 30
data_values = []

for _ in range(num_samples):
    value = pt104.get_value(1)
    data_values.append(value / 1000)  # Convert to °C
    pt.sleep(1)

# Plot the data
import matplotlib.pyplot as plt

plt.plot(range(1, num_samples+1), data_values)
plt.title("Plot of Temperature vs. Sample")
plt.xlabel("Sample")
plt.ylabel("Temperature (°C)")
plt.legend(["Channel 1"])
plt.grid(True)
plt.show()

# Close connection to device
pt104.close_unit()
```

</TabItem>
</Tabs>