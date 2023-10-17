---
title: Connecting to Lakeshore Model 336 by Lakeshore in Python
sidebar_label: Lakeshore Model 336
description: The Model 336 supports the industry’s most advanced line of cryogenic temperature sensors as manufactured by Lake Shore, including diodes, resistance temperature detectors (RTDs), and thermocouples. The controller’s zone tuning feature allows you to measure and control temperatures seamlessly from 300 mK to over 1,500 K by automatically switching temperature sensor inputs when your temperature range goes beyond the usable range of a given sensor.
keywords: [temperature controllers, Lakeshore, QCodes]
slug: /instruments-database/temperature-controllers/lakeshore/lakeshore-model-336
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395613/Instruments/Temperature%20Controllers/Lakeshore-Model-336/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore Model 336

## Instrument Card

<div className="flex">

<div>

The Model 336 supports the industry’s most advanced line of cryogenic temperature sensors as manufactured by Lake Shore, including diodes, resistance temperature detectors (RTDs), and thermocouples. The controller’s zone tuning feature allows you to measure and control temperatures seamlessly from 300 mK to over 1,500 K by automatically switching temperature sensor inputs when your temperature range goes beyond the usable range of a given sensor.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395613/Instruments/Temperature%20Controllers/Lakeshore-Model-336/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.lakeshore.com/docs/default-source/product-downloads/336_manual0ebc9b06cbbb456491c65cf1337983e4.pdf?sfvrsn=2e8633a3_1">here</a></p>

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

## Connect to the Lakeshore Model 336 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Lakeshore Model 336 Temperature Controller using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Lakeshore.Model336 import Model336

# Create an instance of the Model336 instrument
lakeshore = Model336("lakeshore", "TCPIP::192.168.1.1::7777::SOCKET")

# Connect to the instrument
lakeshore.connect()

# Now you can use the instrument to perform operations
# For example, you can read the temperature from a sensor
temperature = lakeshore.temperature()

# Print the temperature
print(f"Temperature: {temperature} K")

# Disconnect from the instrument
lakeshore.disconnect()
```

Make sure to replace `"TCPIP::192.168.1.1::7777::SOCKET"` with the actual IP address and port of your Lakeshore Model 336 Temperature Controller.

</TabItem>
</Tabs>